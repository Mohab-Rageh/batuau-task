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
} from "@nestjs/common";
import { MovieService } from "./movies.service";
import { Movie } from "@prisma/client";

@Controller("movies")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  // Save a favorite movie
  @Post("favorite")
  async saveFavoriteMovie(@Body() movieData: Movie) {
    try {
      return await this.movieService.saveFavoriteMovie(movieData);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Get all favorite movies
  @Get("favorites")
  async getFavoriteMovies() {
    try {
      return await this.movieService.getFavoriteMovies();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Update details of a favorite movie
  @Put("favorite/:id")
  async updateFavoriteMovie(@Param("id") id: number, @Body() movieData: Movie) {
    try {
      return await this.movieService.updateFavoriteMovie(id, movieData);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Delete a favorite movie
  @Delete("favorite/:id")
  async deleteFavoriteMovie(@Param("id") id: number) {
    try {
      return await this.movieService.deleteFavoriteMovie(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
