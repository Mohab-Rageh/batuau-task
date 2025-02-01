import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import axios from "axios";
import * as dotenv from "dotenv";
import { Movie } from "@prisma/client";

dotenv.config();

@Injectable()
export class MovieService {
  private readonly omdbApiKey = process.env.OMDB_API_KEY;
  private readonly omdbUrl = "http://www.omdbapi.com/";

  constructor(private readonly prisma: PrismaService) {}

  async getMoviesFromOMDb(query: string) {
    if (!this.omdbApiKey) {
      throw new HttpException(
        "OMDb API key is not configured",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    try {
      const response = await axios.get(this.omdbUrl, {
        params: {
          apiKey: this.omdbApiKey,
          t: query || "",
        },
      });

      return response.data;
    } catch (error) {
      throw new HttpException(
        "Error fetching movie data from OMDb API",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async saveFavoriteMovie(data: Movie) {
    return this.prisma.movie.create({
      data: {
        title: data.title,
        poster: data.poster,
        year: data.year,
      },
    });
  }

  async getMovies(query: string, onlyFav: boolean) {
    if (!onlyFav) return this.getMoviesFromOMDb(query);

    return this.prisma.movie.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
  }

  async deleteFavoriteMovie(id: number) {
    return this.prisma.movie.delete({
      where: { id },
    });
  }
}
