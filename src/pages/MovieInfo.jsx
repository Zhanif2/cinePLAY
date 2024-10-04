import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieInfo = ({ addToFavourites, favourites }) => {
  const location = useLocation();
  const { movie } = location.state || {};

  // Check if movie data is available
  if (!movie) {
    console.log("No movie data available");
    return <p>Movie not found.</p>;
  }

  function addMovieToFavourites(movie) {
    addToFavourites(movie);
  }

  function movieExistInFavourites() {
    return favourites.some(favMovie => favMovie.id === movie.id);
  }

  return (
    <>
      <div id="movies__body">
        <main className="movies__main">
          <div className="movies__container">
            <div className="row">
              <div className="movie__selected--top">
                <Link to="/Main" className="movie__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>
              </div>
              <div className="movie__selected">
                <figure className="movie__selected--figure">
                  <div className="movie__selected--img ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="movie__selected--img"
                    />
                  </div>
                </figure>
                <div className="movie__selected--description">
                  <div className="movie__selected--title">{movie.title}</div>
                  <div className="movie__selected--head">
                    Overview:
                    <div className="movie__selected--text">
                      {movie.overview}
                    </div>
                  </div>
                  <div className="movie__selected--head">
                    Release Date:
                    <div className="movie__selected--text">
                      {movie.release_date}
                    </div>
                  </div>
                  <div className="movie__selected--head">
                    Vote Average:
                    <div className="movie__selected--text">
                      {movie.vote_average}
                    </div>
                  </div>
                  {movieExistInFavourites() ? (
                    <Link to='/favourites'>
                      <button className="movie__info--btn btn">
                        View Favourites
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="movie__info--btn btn"
                      onClick={() => addMovieToFavourites(movie)}
                    >
                      Add to Favourites
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MovieInfo;
