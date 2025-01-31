import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { debounce } from "lodash";
import api from "./api";
import { Movie } from "./types/ResponseType";
import MovieList from "./components/MovieList";
import Favorites from "./pages/Favorites";
import Navbar from "./components/NavBar";

const data = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English",
    Country: "USA",
    Awards: "Won 4 Oscars. 157 wins & 220 nominations total",
    Poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "8.8/10" }],
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "2,200,000",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
    isFave: true,
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Crime, Drama",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan, David S. Goyer",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    Plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    Language: "English",
    Country: "USA",
    Awards: "Won 2 Oscars. 159 wins & 220 nominations total",
    Poster: "https://m.media-amazon.com/images/I/51EbJjlOeXL._AC_SY679_.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "9.0/10" }],
    Metascore: "84",
    imdbRating: "9.0",
    imdbVotes: "2,500,000",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
    isFave: true,
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA",
    Awards: "Won 1 Oscar. 44 wins & 148 nominations total",
    Poster: "https://m.media-amazon.com/images/I/71i-GKYHyNL._AC_SY679_.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "8.6/10" }],
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "1,700,000",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
    isFave: false,
  },
];

function App() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>(data);

  const fetchMovies = (query: string) =>
    debounce(async () => {
      if (query.trim() === "") return;

      try {
        const response = await api.get("/movies", {
          params: {
            query,
          },
        });
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }, 500);

  const debouncedFetchMovies = useCallback(
    (query: string) => fetchMovies(query),
    []
  );

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    debouncedFetchMovies(newQuery);
  };

  useEffect(() => {
    fetchMovies("");
  }, []);

  return (
    <Router>
      <main className="main-content">
        <Navbar query={query} handleQueryChange={handleQueryChange} />

        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/favorites" element={<Favorites favMovies={movies} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
