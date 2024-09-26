import React from "react";
import MoviePoster from "../ui/MoviePoster";

function MovieResults() {
  return (
    <section id="new">
        <div className="container section__container">
      <div className="row">
        <div className="movies__container">
          <MoviePoster/>
          <MoviePoster/>
          <MoviePoster/>
          <MoviePoster/>
          <MoviePoster/>
          <MoviePoster/>
          <MoviePoster/>
          <MoviePoster/>
        </div>
      </div>
      </div>
    </section>
  );
}

export default MovieResults;
