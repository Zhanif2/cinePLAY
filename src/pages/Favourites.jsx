import React from 'react';
import mov from '../assets/sample__movie--poster.jpg'

const Favourites = () => {
  return (
    <div className='row'>
    <div className='favourites__container'>
            <h1 className="title glow__effect">Favourites</h1>
            <div className="movie">
              <figure className="movie__poster--wrapper">
                <img src={mov} alt="" className="movies__poster" />
              </figure>
              <div className="movies__title">
                <div className="movies__title--link">
                  Avengers
                </div>
              </div>
            </div>
            </div>
    </div>
  )
}

export default Favourites