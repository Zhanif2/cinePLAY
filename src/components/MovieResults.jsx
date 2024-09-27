import React from "react";
import MoviePoster from "../ui/MoviePoster";


const MovieResults = ({movies}) => {
  return (
    <section id="new">
        <div className="container section__container">
      <div className="row">
        <div className="movies__container">
       {
       movies.slice(0, 12).map((movie) => ( 
        <MoviePoster key={movie.id} movie={movie}/>
        ))
       }
          
         
        </div>
      </div>
      </div>
    </section>
  )
}

export default MovieResults