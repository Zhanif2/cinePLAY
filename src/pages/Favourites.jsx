import React, { useState } from 'react';
import mov from '../assets/sample__movie--poster.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = (e) => {
    e.preventDefault();
    setIsFavourite(!isFavourite);
  }
  return (
    <div className='row'>
    <div className='favourites__container'>
            <h1 className="title glow__effect">Favourites</h1>
            <div className="movie">
      <Link to={`/movie-info/`} >
              <figure className="movie__poster--wrapper">
                <img  alt="" className="movies__poster" />
                <div className="overlay favourites__overlay">
                <div onClick={toggleFavourite} className="heart__icon">
            {
              isFavourite ? (
                <FontAwesomeIcon icon={'heart'} className="colored__heart"/> 
                ):(
                  <FontAwesomeIcon icon={['far', 'heart']} className="reg__heart" />
                )
            }
          </div>
                </div>
              </figure>
              </Link>
              <div className="movies__title">
              <Link to={`/movie-info/movieid`}>

                <div className="movies__title--link">
                 
                </div>
              </Link>

              </div>
            </div>
            </div>
    </div>
  )
}

export default Favourites