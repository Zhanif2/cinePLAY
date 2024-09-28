import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({searchTerm, setSearchTerm, onSearch}) => {
 
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
                onKeyDown={(event) => event.key === 'Enter' && onSearch()} />
                <FontAwesomeIcon 
                icon='fa-search' 
                className='btn search__btn main__btn'
                onClick={() => onSearch()}/>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default Search