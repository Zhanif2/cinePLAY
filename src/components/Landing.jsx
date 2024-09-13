import React from 'react'
import lp from '../assets/homepage-img.png'

const Landing = () => {
  return (
    <div className="container">
      <div className="column">
        <div className="landing__page--contents">
          <h1>Welcome to <span className="glow__effect">CinePLAY</span></h1>
          <p className="description">Explore CinePLAY's wide selection of films, from blockbusters to hidden gems. Your next movie adventure starts here!</p>
          <button className='btn landing__page--btn'>Explore now</button>
        </div>
        <div className="img">
          <img src={lp} alt="" className='landing__page--img'/>
        </div>
      </div>
    </div>
  )
}

export default Landing;