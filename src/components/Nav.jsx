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
            <button className='btn__menu'>
                <FontAwesomeIcon icon='bars'/>
            </button>
            <li className="nav__icon">
              <a href="/favourites" className='nav__link glow'>
              <FontAwesomeIcon icon='fa-heart'/>
              </a>
            </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon='times'/>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className='menu__link underline'>Home</a>
            </li>
            <li className="menu__list">
              <a href="/" className='menu__link underline'>Movies</a>
            </li>
            <li className="menu__list">
              <a href="/" className='menu__link underline'>Tv Shows</a>
            </li>
            <li className="menu__list">
              <a href="/" className='menu__link underline'>Favourites</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
