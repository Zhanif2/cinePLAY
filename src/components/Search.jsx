import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {
  const [timer, setTimer] = useState(null);

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (timer) clearTimeout(timer);  // Clear previous timeout
      setTimer(setTimeout(() => onSearch(), 300));  // Delay search by 300ms
    }
  };

  return (
    <div className='row'>
      <div className='search__container'>
        <div className="content__wrapper">
          <Link to="/Main">
            <h1 className="title glow__effect">Browse Movies</h1>
          </Link>
          <div className="searchbar search">
            <input 
              id="movie__search" 
              type="text" 
              className='search__input' 
              placeholder='Search'
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyUp={handleKeyUp} 
            />
            <FontAwesomeIcon 
              icon='fa-search' 
              className='btn search__btn main__btn'
              onClick={() => onSearch()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Search;
