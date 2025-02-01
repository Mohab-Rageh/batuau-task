import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import SearchMovie from "./pages/SearchMovie";

function App() {
  return (
    <Router>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<SearchMovie />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
