import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const MovieInfo = () => {
  const location = useLocation();
  const { movie } = location.state || {}; // Get movie data from state

  if (!movie) {
    console.log("No movie data available");
    return <p>Movie not found.</p>; // Handle case where movie data is not passed
  }

  console.log("movie", movie);

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
                    <div className="movie__selected--text">{movie.overview}</div>
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
                  <button className="movie__info--btn btn">Add to Favourites</button>
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
