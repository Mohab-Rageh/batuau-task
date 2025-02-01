// components/MovieCard.tsx

import React, { useEffect } from "react";
import { Movie } from "../types/ResponseType";

interface MovieCardProps {
  movie: Movie;
  onFavClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onFavClick }) => {
  const [isFave, setIsFave] = React.useState<boolean>(false);

  useEffect(() => {
    setIsFave(false);
  }, [movie]);
  return (
    <div className="movie-card">
      {onFavClick && (
        <div className="fav-icon">
          <button
            title={isFave ? "Remove from Favorites" : "Add to Favorites"}
            onClick={() => {
              if (isFave) return;

              setIsFave(true);
              onFavClick();
            }}
          >
            <img
              src={
                isFave
                  ? "https://img.icons8.com/ios-filled/50/FF0000/like--v1.png"
                  : "https://img.icons8.com/ios-filled/50/000000/like--v1.png"
              }
              alt={isFave ? "dislike" : "like"}
            />
          </button>
        </div>
      )}
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
    </div>
  );
};

export default MovieCard;
