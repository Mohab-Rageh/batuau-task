// src/movie/movie.service.ts

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";
import axios from "axios";
import * as dotenv from "dotenv";
import { Movie } from "@prisma/client";

// Load environment variables
dotenv.config();

@Injectable()
export class MovieService {
  private readonly omdbApiKey = process.env.OMDB_API_KEY; // Use environment variable
  private readonly omdbUrl = "http://www.omdbapi.com/";

  constructor(private readonly prisma: PrismaService) {}

  async getMovieDetails(query: string) {
    if (!this.omdbApiKey) {
      throw new Error("OMDb API key is not configured");
    }

    try {
      const response = await axios.get(this.omdbUrl, {
        params: {
          s: query, // Search query (movie name)
          apiKey: this.omdbApiKey, // Fetch API key from environment variable
        },
      });

      if (response.data.Response === "False") {
        throw new Error("Movie not found");
      }

      return response.data.Search;
    } catch (error) {
      throw new Error("Error fetching movie data from OMDb API");
    }
  }

  // Save a movie as a favorite
  async saveFavoriteMovie(data: Movie) {
    return this.prisma.movie.create({
      data,
    });
  }

  // Get all favorite movies
  async getFavoriteMovies() {
    return this.prisma.movie.findMany({
      where: {
        isFave: true,
      },
    });
  }

  // Update details of a favorite movie
  async updateFavoriteMovie(id: number, movieData: Movie) {
    return this.prisma.movie.update({
      where: { id },
      data: movieData,
    });
  }

  // Delete a favorite movie
  async deleteFavoriteMovie(id: number) {
    return this.prisma.movie.delete({
      where: { id },
    });
  }
}
