// src/movie/movie.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
  Query,
} from "@nestjs/common";
import { MovieService } from "./movies.service";
import { Movie } from "@prisma/client";

@Controller("movies")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post("")
  async saveFavoriteMovie(@Body() movieData: { movie: Movie }) {
    try {
      console.log(movieData.movie);
      return await this.movieService.saveFavoriteMovie(movieData.movie);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("")
  async getMovies(
    @Query("onlyFav") onlyFav: string,
    @Query("query") query: string
  ) {
    try {
      const onlyFavBool = onlyFav === "true";

      return await this.movieService.getMovies(query, onlyFavBool);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(":id")
  async deleteFavoriteMovie(@Param("id") id: number) {
    try {
      return await this.movieService.deleteFavoriteMovie(Number(id));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
