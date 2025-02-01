import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import { Movie } from "../types/ResponseType";
import api from "../api";
import MovieCard from "../components/MovieCard";

const Favorites: React.FC = () => {
  const [movie, setMovie] = React.useState<Movie[]>([]);

  useEffect(() => {
    const getFavorites = async () => {
      const response = await api.get("", {
        params: {
          onlyFav: true,
        },
      });

      if (response.data.Error) return;
      setMovie(response.data);
    };
    getFavorites();
  }, []);

  return (
    <>
      <Navbar />
      <div className="movies-container">
        {movie.map((movie) => (
          <MovieCard
            onFavClick={async () => {
              await api.delete(`/${movie.id}`);
            }}
            key={movie.title}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
