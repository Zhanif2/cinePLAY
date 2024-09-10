import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../assets/logo.png'
const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
        <img src={logo} alt="" className='logo no__transition'/>
        </a>
        <ul className='nav__links'>
            <li className="nav__list">
                <a href="/" className='nav__link underline'>Home</a>
            </li>
            <li className="nav__list">
                <a href="/" className='nav__link underline'>Movies</a>
            </li>
            <li className="nav__list">
                <a href="/" className='nav__link underline'>Tv Shows</a>
            </li>
            <li className="nav__list">
                <a href="/" className='nav__link underline'>Favourites</a>
            </li>
            <button className='btn__menu'>
                <FontAwesomeIcon icon='bars'></FontAwesomeIcon>
            </button>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
