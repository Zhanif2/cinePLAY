import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoviePoster = ({ movie = {}, addToFavourites, removeMovie, favourites = [] }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const isMovieFavourite = favourites.some(favMovie => favMovie.id === movie.id);
    setIsFavourite(isMovieFavourite);
  }, [favourites, movie.id]);

  const toggleFavourite = (e) => {
    e.preventDefault();

    if (isFavourite) {
      removeMovie(movie);
      setIsFavourite(false);
      console.log(`${movie.title} has been removed from favourites`);
    } 
    else {
      setIsFavourite(true);
      addToFavourites(movie); 
      console.log(`${movie.title} has been added to favourites`);
    }
  };

  return (
    <div className="movie">
      <Link to={`/movie-info/${movie.id}`} state={{ movie: movie }}>
        <figure className="movies__poster--wrapper">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className="movies__poster" 
          />
          <div className="overlay">
            <div onClick={toggleFavourite} className="heart__icon">
              {isFavourite ? (
                <FontAwesomeIcon icon="heart" className="colored__heart" /> 
              ) : (
                <FontAwesomeIcon icon={['far', 'heart']} className="reg__heart" />
              )}
            </div>
          </div>
        </figure>
        <div className="movies__title">
          {movie.title}
        </div>
      </Link>
    </div>
  );
};

export default MoviePoster;
