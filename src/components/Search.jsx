import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Search = () => {
  return (
    <div className='row'>
    <div className='search__container'>
        <div className="content__wrapper">
            <h1 className="title glow__effect">Browse Movies</h1>
            <div className="searchbar search">
                <input id="movie__search" type="text" className='search__input' placeholder='Search' />
                <FontAwesomeIcon icon='fa-search' className='btn search__btn main__btn'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Search