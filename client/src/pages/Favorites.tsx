// pages/Favorites.tsx

import React from "react";
import { Movie } from "../types/ResponseType";
import MovieCard from "../components/MovieCard";

interface FavoritesProps {
  favMovies: Movie[];
}

const Favorites: React.FC<FavoritesProps> = ({ favMovies }) => {
  return (
    <div className="movies-container">
      {favMovies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Favorites;
