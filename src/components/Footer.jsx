import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="row row__column">
            <div className="footer__list">
                <div className="footer__link">Home</div>
                <div className="footer__link no__cursor">About</div>
                <div className="footer__link">Movies</div>
                <div className="footer__link">Tv Shows</div>
                <div className="footer__link">Favourites</div>
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
