import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({
  query,
  handleQueryChange,
}: {
  query: string;
  handleQueryChange: (query: string) => void;
}) => {
  const location = useLocation();

  return (
    <nav className="nav">
      <h1>Movie App</h1>
      <div className="nav-buttons">
        <SearchBar query={query} onQueryChange={handleQueryChange} />
        {location.pathname === "/favorites" ? (
          <Link to="/">
            <button title="Go to List">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/list.png"
                alt="Go to List"
              />
            </button>
          </Link>
        ) : (
          <Link to="/favorites">
            <button title="Go to Favorites">
              <img
                src="https://img.icons8.com/ios-filled/50/FF0000/like--v1.png"
                alt="Favorites"
              />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
