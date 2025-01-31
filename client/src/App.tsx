// App.tsx

import { useState } from "react";
import { debounce } from "lodash";
import api from "./api";
import { Movie } from "./types/ResponseType";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const data: Movie[] = [
  // ... Movie data (same as you provided)
];

function App() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>(data);

  const fetchMovies = debounce(async (searchTerm: string) => {
    if (!searchTerm) {
      setMovies(data);
      return;
    }

    try {
      const response = await api.get<Movie[]>("/movies");
      const data = response.data;

      if (data) {
        setMovies(data);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }, 500);

  const handleQueryChange = (query: string) => {
    setQuery(query);
    fetchMovies(query);
  };

  return (
    <main className="main-content">
      <nav className="nav">
        <h1>Movie App</h1>
        <SearchBar query={query} onQueryChange={handleQueryChange} />
      </nav>

      <MovieList movies={movies} />
    </main>
  );
}

export default App;
