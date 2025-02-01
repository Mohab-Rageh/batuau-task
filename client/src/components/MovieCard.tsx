// components/MovieCard.tsx

import React, { useEffect } from "react";
import { Movie } from "../types/ResponseType";

interface MovieCardProps {
  movie: Movie;
  onFavClick?: () => void;
  update?: (data: { title: string; year: string }) => void;
  withEdit?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onFavClick,
  withEdit,
  update,
}) => {
  const [isFave, setIsFave] = React.useState<boolean>(false);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [editData, setEditData] = React.useState<{
    title: string;
    year: string;
  }>({
    title: movie.title,
    year: movie.year,
  });

  useEffect(() => {
    setIsFave(false);
    setEditData({ title: movie.title, year: movie.year });
  }, [movie]);
  return (
    <div className="movie-card">
      <div className="fav-icon">
        {onFavClick && (
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
        )}

        {withEdit && (
          <button
            onClick={() => {
              setIsEditing(!isEditing);
              if (isEditing) {
                update?.(editData);
              }
            }}
          >
            <img
              src={
                isEditing
                  ? "https://img.icons8.com/ios-filled/50/FF0000/checkmark.png"
                  : "https://img.icons8.com/ios-filled/50/000000/edit.png"
              }
              alt="edit"
            />
          </button>
        )}
      </div>
      <img src={movie.poster} alt={movie.title} />
      {!isEditing && (
        <>
          <h3>{movie.title}</h3>
          <p>Year: {movie.year}</p>
        </>
      )}
      {isEditing && (
        <>
          <input
            type="text"
            placeholder="Title"
            defaultValue={movie.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
            value={editData.title}
          />
          <input
            type="text"
            placeholder="Year"
            defaultValue={movie.year}
            onChange={(e) => setEditData({ ...editData, year: e.target.value })}
            value={editData.year}
          />
        </>
      )}
    </div>
  );
};

export default MovieCard;
