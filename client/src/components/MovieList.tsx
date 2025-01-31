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
      {movies.map((movie, index) => (
        <MovieCard key={movie.imdbID} movie={movie} isFav={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default MovieList;
