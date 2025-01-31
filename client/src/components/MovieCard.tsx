// components/MovieCard.tsx

import React from "react";
import { Movie } from "../types/ResponseType";

interface MovieCardProps {
  movie: Movie;
  isFav: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFav }) => {
  return (
    <div className="movie-card">
      <div className="fav-icon">
        <button>
          <img
            src={
              isFav
                ? "https://img.icons8.com/ios-filled/50/FF0000/like--v1.png"
                : "https://img.icons8.com/ios-filled/50/000000/like--v1.png"
            }
            alt={isFav ? "dislike" : "like"}
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
