import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  function openMenu (){
    document.body.classList += " menu--open";
}
function closeMenu (){
    document.body.classList.remove("menu--open");
}
  return (
    <>
      <div className="nav__container">
        <Link to="/">
        <img src={logo} alt="" className='logo no__transition'/>
        </Link>
        <ul className='nav__links'>
            <li className="nav__list">
                <Link to="/" className='nav__link underline'>Home</Link>
            </li>
            <li className="nav__list">
                <Link to="/Main" className='nav__link underline'>Popular</Link>
            </li>
            <li className="nav__list">
                <a href="" className='nav__link underline no__cursor'>Contact</a>
            </li>
            <button className='btn__menu' onClick={openMenu}>
                <FontAwesomeIcon icon='bars'/>
            </button>
            <li className="nav__icon">
              <Link to="/favourites" className='nav__link glow'>
              <FontAwesomeIcon icon='fa-heart'/>
              </Link>
            </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon='times'/>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className='menu__link underline'>Home</Link>
            </li>
            <li className="menu__list">
              <Link to="/main" className='menu__link underline'>Popular</Link>
            </li>
            <li className="menu__list">
              <a href="" className='menu__link underline no__cursor'>Contact</a>
            </li>
            <li className="menu__list">
              <Link to="/favourites" className='menu__link underline'>Favourites</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
