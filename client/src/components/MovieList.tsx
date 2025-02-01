// components/MovieList.tsx

import React from "react";
import { Movie } from "../types/ResponseType";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map((movie) => {
        return (
          <MovieCard onFavClick={() => {}} key={movie.title} movie={movie} />
        );
      })}
    </div>
  );
};

export default MovieList;
