import React, { useEffect, useState } from "react";
import "./PopularMovies.css";
import MovieCard from "./MovieCard";

function TopRated() {
  const [Moviedata, setMoviedata] = useState([]);
  const [page, setpage] = useState(1);

  const DataFetch = async () => {
    const Data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`
    );
    const Response = await Data.json();
    setMoviedata((pre) => [...pre, ...Response.results]);
    console.log(Moviedata);
  };

  const PaginationHandler = () => {
    setpage(page + 1);
  };

  useEffect(() => {
    DataFetch();
  }, [page]);
  return (
    <>
      <div className="PopularMovies-heroSection">
        {Moviedata.map((key, index) => {
          return <MovieCard key={index} data={key} />;
        })}
      </div>
      <div className="load-main">
        <div className="load-more" onClick={PaginationHandler}>
          Load More.....!
        </div>
      </div>
    </>
  );
}

export default TopRated;
