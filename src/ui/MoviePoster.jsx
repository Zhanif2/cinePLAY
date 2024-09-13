import React from "react";
import poster from "../assets/sample__movie--poster.jpg";

function MoviePoster() {
  return (
    <div className="movie">
      <a href="">
        <figure className="movies__poster--wrapper">
          <img src={poster} alt="" className="movies__poster" />
        </figure>
      </a>
      <div className="movies__title">
        <a href="/" className="movies__title--link">
          Avengers: Endgame
        </a>
      </div>
    </div>
  );
}

export default MoviePoster;
