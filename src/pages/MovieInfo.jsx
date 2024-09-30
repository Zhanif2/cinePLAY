import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import mov from "../assets/sample__movie--poster.jpg";
import MovieDescription from "../components/MovieDescription";

const MovieInfo = () => {
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
                    <img src='' alt="" />
                  </div>
                </figure>
                <div className="movie__selected--description">
                  <h2 className="movie__selected--title info">Avengers</h2>
                  <MovieDescription/>
                  <button className="btn">
                    Add to Favourites
                  </button>
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
