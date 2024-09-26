import React from "react";
import MoviePoster from "../ui/MoviePoster";

function Popular() {
  return (
    <section id="new">
        <div className="container section__container">
      <div className="row">
        <h2 className="section__title">Popular</h2>
        <div className="movies__container">
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

export default Popular;
