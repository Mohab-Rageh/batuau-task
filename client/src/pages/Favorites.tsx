import React from "react";
import Navbar from "../components/NavBar";

const Favorites: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="movies-container">
        {/* {favMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))} */}
      </div>
    </>
  );
};

export default Favorites;
