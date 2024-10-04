import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Favourites = ({ favourites, removeMovie }) => {
  return (
    <div className="row">
      <div className="favourites__container">
        <h1 className="title glow__effect">Favourites</h1>
        <div className="row">
          <div className="movie__selected--top">
            <Link to="/Main" className="movie__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
          </div>
          <div className="movies__container">
            {favourites.length > 0 ? (
              favourites.map((movie) => (
                <div className="movie" key={movie.id}>
                  <figure className="movies__poster--wrapper">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="movies__poster"
                    />
                    <div className="overlay">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); 
                          removeMovie(movie); 
                        }}
                        className="heart__icon--favourite" 
                      >
                        <FontAwesomeIcon
                          icon="heart"
                          className="colored__heart"
                        />
                      </button>
                    </div>
                  </figure>
                  <Link to={`/movie-info/${movie.id}`} state={{ movie }}>
                    <div className="movies__title">{movie.title}</div>
                  </Link>
                </div>
              ))
            ) : (
              <></> // Keep it blank if there are no favorites
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
