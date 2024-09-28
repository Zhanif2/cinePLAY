import React from "react";
import MoviePoster from "../ui/MoviePoster";


const MovieResults = ({movies, loading}) => {
  return (
    <section id="new">
        <div className="container section__container">
      <div className="row">
        <div className="movies__container">
          {
            loading ? (
              <div className="loader">
              <ul className="loading__state">
                  <li className="loading"></li>
                  <li className="loading"></li>
                  <li className="loading"></li>
                  <li className="loading"></li>
                  <li className="loading"></li>
                  <li className="loading"></li>
                  <li className="loading"></li>
              </ul>
          </div> 
            ) :
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