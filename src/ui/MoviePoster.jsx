import React from "react";
import poster from "../assets/sample__movie--poster.jpg";
import { Link } from "react-router-dom";

const MoviePoster = ({movie}) => {
  return (
    <div className="movie">
      <Link to="/movie-info" href="">
        <figure className="movies__poster--wrapper">
        <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className="movies__poster" 
          />
        </figure>
      </Link>
      <div className="movies__title">
        <Link to="/movie-info" className="movies__title--link">
          {movie.title}
        </Link>
      </div>
    </div>
  )
}

export default MoviePoster
