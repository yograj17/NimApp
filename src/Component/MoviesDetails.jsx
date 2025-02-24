import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesDetails.css";

const MoviesDetails = () => {
  const location = useLocation();
  const movieId = location.state;

  const [Moviedata, setMoviedata] = useState({});
  const [CastData, setCastData] = useState([]);

  const DataFetch = async () => {
    const CastData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US
`
    );
    const Data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US
  `
    );
    const CastResponse = await CastData.json();
    const DataResponse = await Data.json();
    setMoviedata(DataResponse);
    setCastData(CastResponse.cast);
    console.log(CastResponse.cast);
  };

  useEffect(() => {
    DataFetch();
  }, []);

  return (
    <div className="main-div-movieDetails">
      <div className="movieDetails">
        <div className="movie-heading">
          <div className="main-movie-heading">
            <div className="actual-movie-img">
              <img
                src={`https://image.tmdb.org/t/p/w300${Moviedata.poster_path}`}
                className="actual-movie-img-tag"
              />
            </div>

            <div className="movie-heading-details">
              <div className="actual-movie-heading">
                {Moviedata.original_title}
              </div>
              <div className="Rating">Rating {Moviedata.vote_average}</div>
              <div className="timing">{Moviedata.runtime}Min</div>
              <div className="Date">Release Date {Moviedata.release_date}</div>
            </div>
          </div>
          <div className="overview">
            <div className="actual-overview">Overview</div>
            <div className="actual-info">{Moviedata.overview}</div>
          </div>
        </div>
        <div className="movie-img">
          <img
            src={`https://image.tmdb.org/t/p/w300${Moviedata.backdrop_path}`}
            className="movie-img-tag"
          />
        </div>
      </div>
      <div className="castDetails">
        {CastData.map((key) => {
          return (
            <div>
              <div className="cast-img">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${key.profile_path}`}
                  className="cast-img-tag"
                />
              </div>
              <div>{key.original_name}</div>
              <div>character{key.character}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesDetails;
