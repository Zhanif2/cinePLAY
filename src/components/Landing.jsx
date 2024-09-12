import React from 'react'
import lp from '../assets/homepage-img.jpg'

const Landing = () => {
  return (
    <div className="container">
      <div className="column">
        <div className="landing__page--contents">
          <h1>Welcome to <span className="glow__effect">CinePLAY</span></h1>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, corrupti? Libero corporis deserunt natus, quidem consequatur repellat. Quibusdam, ex quos.</p>
          <button className='btn'>explore now</button>
        </div>
        <div className="img">
          <img src={lp} alt="" className='landing__page--img'/>
        </div>
      </div>
    </div>
  )
}

export default Landing;