import React from "react";
import "./movie.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <>
      <div className="movie__container">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={
              poster_path
                ? API_IMG + poster_path
                : "https://www.immobilier-lagrandemotte.com/wp-content/themes/realestate-7/images/no-image.png"
            }
            alt={title}
          />
          <div className="movie-info px-6 py-4">
            <p className="font-bold text-white-500 text-xl mb-2">{title}</p>
            <span className="inline-block  px-3 py-1 text-sm font-bold text-red-700 mr-2">
              {vote_average}
            </span>
          </div>
        </div>
        <div className="movie-overview">
          <h3 className="px-2 py-2 text-white-700 font-bold">Overview</h3>
          <p>{overview} </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
