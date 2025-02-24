import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  return (
    <Link to={"/moviedetails"} state={data.id} className="main">
      <img
        src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
        className="poster-img"
      />
      <div>{data.original_title}</div>
      <div>Rating {data.vote_average}</div>
    </Link>
  );
}

export default MovieCard;
