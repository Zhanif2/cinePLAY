import React from "react";
import MoviePoster from "../ui/MoviePoster";

function Upcoming() {
  return (
    <section id="new">
        <div className="container section__container">
      <div className="row">
        <h2 className="section__title glow__effect">Upcoming</h2>
        <div className="movies__container">
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

export default Upcoming;
