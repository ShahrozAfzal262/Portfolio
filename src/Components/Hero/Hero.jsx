import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-photo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';   

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-content">
        <img src={profile_img} alt="Shahroz Afzal" />
        <div className="hero-copy">
          <h1><span>I'm Shahroz Afzal,</span> an aspiring MERN Stack developer.</h1>
          <p>I’m learning to build full-stack web applications with MongoDB, Express.js, React, and Node.js. Take a look at what I’m learning and building.</p>
          <div className="hero-action">
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink></div>
            <div className='hero-resume'><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
