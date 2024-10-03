import React from "react";
import MoviePoster from "../ui/MoviePoster";

const MovieResults = ({ movies, loading, addToFavourites, favourites }) => {
  return (
    <section id="new">
      <div className="container section__container">
        <div className="row">
          <div className="movies__container">
            {loading ? (
              <div className="loader">
                <ul className="loading__state">
                  {[...Array(7)].map((_, index) => (
                    <li key={index} className="loading"></li>
                  ))}
                </ul>
              </div>
            ) : (
              movies.length > 0 ? (
                movies.slice(0, 12).map((movie) => (
                  <MoviePoster key={movie.id} movie={movie} addToFavourites={addToFavourites} favourites={favourites}/>
                ))
              ) : (
                <p>No movies found.</p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieResults;
