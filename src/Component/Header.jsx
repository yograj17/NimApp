import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [MovieName, setMovieName] = useState({ moviename: "" });

  const movieNameHandler = (e) => {
    const { value, name } = e.target;
    setMovieName((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div className="Navbar">
      <div className="Logo">MovieDB</div>
      <div className="nav-element">
        <Link to={"/"} className="popular">
          Popular
        </Link>
        <Link to={"/toprated"} className="Top-Rated">
          Top Rated
        </Link>
        <Link to={"/upcoming"} className="Upcoming">
          Upcoming
        </Link>
        <div className="search-fild">
          <input
            type="text"
            name="moviename"
            onChange={movieNameHandler}
            placeholder="Movie Name"
            className="Movie-search-fild"
          />
          <Link
            to={"/searchmovie"}
            state={MovieName.moviename}
            className="search-button"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
