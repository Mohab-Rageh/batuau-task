// components/SearchBar.tsx

import React from "react";

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onQueryChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for a movie..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
};

export default SearchBar;
