import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularMovies from "./Component/PopularMovies.jsx";
import TopRated from "./Component/TopRated.jsx";
import Upcoming from "./Component/Upcoming.jsx";
import MoviesDetails from "./Component/MoviesDetails.jsx";
import SearchMovie from "./Component/SearchMovie.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Route>
      <Route path="/" element={<App />}>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/moviedetails" element={<MoviesDetails />} />
        <Route path="/searchmovie" element={<SearchMovie />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
