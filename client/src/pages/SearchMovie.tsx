import { useState } from "react";
import api from "../api";
import { Movie } from "../types/ResponseType";
import Navbar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { debounce } from "lodash";

function SearchMovie() {
  const [query, setQuery] = useState<string>("");
  const [movie, setMovie] = useState<Movie | undefined>();

  const fetchData = debounce(async (newQuery: string) => {
    const response = await api.get<{
      Title: string;
      Year: string;
      Poster?: string;
      Error?: string;
    }>("", {
      params: {
        query: newQuery,
      },
    });

    if (response.data.Error) return;

    setMovie({
      id: 0,
      title: response.data.Title,
      poster: response.data.Poster,
      year: response.data.Year,
    });
  }, 500);

  const handleQueryChange = async (newQuery: string) => {
    setQuery(newQuery);
    fetchData(newQuery);
  };

  return (
    <>
      <Navbar query={query} handleQueryChange={handleQueryChange} />

      {movie && (
        <MovieCard
          onFavClick={async () => {
            await api.post("", {
              movie,
            });

            handleQueryChange("");
          }}
          movie={movie}
        />
      )}
    </>
  );
}

export default SearchMovie;
