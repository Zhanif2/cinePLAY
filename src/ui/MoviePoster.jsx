import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoviePoster = ({movie}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = (e) => {
    e.preventDefault();
    setIsFavourite(!isFavourite);
  }

  return (
    <div className="movie">
      <Link to="/movie-info" href="">
        <figure className="movies__poster--wrapper">
        <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className="movies__poster" 
          />
           <div className="overlay">
          <div onClick={toggleFavourite} className="heart__icon">
            {
              isFavourite ? (
                <FontAwesomeIcon icon={'heart'} className="colored__heart"/> 
                ):(
                  <FontAwesomeIcon icon={['far', 'heart']} className="reg__heart" />
                )
            }
          </div>
        </div>
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
