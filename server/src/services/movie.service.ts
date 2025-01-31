import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

@Injectable()
export class MovieService {
  private readonly omdbApiKey = process.env.OMDB_API_KEY;
  private readonly omdbUrl = "http://www.omdbapi.com/";

  async getMovieDetails(query: string) {
    if (!this.omdbApiKey) {
      throw new HttpException(
        "OMDb API key is not configured",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    try {
      const response = await axios.get(this.omdbUrl, {
        params: {
          s: query,
          apiKey: this.omdbApiKey,
        },
      });

      if (response.data.Response === "False") {
        throw new HttpException("Movie not found", HttpStatus.NOT_FOUND);
      }

      return response.data.Search;
    } catch (error) {
      throw new HttpException(
        "Error fetching movie data from OMDb API",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
