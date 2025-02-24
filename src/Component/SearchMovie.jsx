import React, { useEffect, useState } from "react";
import "./SearchMovie.css";
import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";

const SearchMovie = () => {
  const location = useLocation();
  const movieName = location.state;
  console.log(movieName);

  const [Moviedata, setMoviedata] = useState([]);

  const DataFetch = async () => {
    const Data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${movieName}&page=1`
    );
    const Response = await Data.json();
    setMoviedata(Response.results);
    console.log(Response.results);
  };

  useEffect(() => {
    DataFetch();
  }, []);

  return (
    <div>
      <div className="PopularMovies-heroSection">
        {Moviedata.map((key, index) => {
          return <MovieCard key={index} data={key} />;
        })}
      </div>
    </div>
  );
};

export default SearchMovie;
