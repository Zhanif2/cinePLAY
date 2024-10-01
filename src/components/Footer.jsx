import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="row row__column">
            <div className="footer__list">
              <Link to='/'>
                <div className="footer__link">Home</div>
                </Link>
                <div className="footer__link no__cursor">About</div>
                <Link to='/Main'>
                <div className="footer__link">Popular</div>
                </Link>
                <Link to='/favourite'>
                <div className="footer__link">Favourites</div>
                </Link>
                <div className="footer__link no__cursor">Contact</div>
            </div>
            <div className="footer__copyright">
                Copyright &copy; 2024 CinePLAY
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
