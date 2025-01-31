// components/MovieCard.tsx

import React from "react";
import { Movie } from "../types/ResponseType";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="fav-icon">
        <button
          title={movie.isFave ? "Remove from Favorites" : "Add to Favorites"}
        >
          <img
            src={
              movie.isFave
                ? "https://img.icons8.com/ios-filled/50/FF0000/like--v1.png"
                : "https://img.icons8.com/ios-filled/50/000000/like--v1.png"
            }
            alt={movie.isFave ? "dislike" : "like"}
          />
        </button>
      </div>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
    </div>
  );
};

export default MovieCard;
