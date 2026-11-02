import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile-photo.png'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt="Shahroz Afzal" />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I’m at the beginning of my web development journey and currently learning the MERN stack: MongoDB, Express.js, React, and Node.js.</p>
                        <p>I enjoy learning by building and improving projects, and I’m looking forward to growing my skills through hands-on practice.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p></div>
                        <div className="about-skill"><p>JavaScript</p></div>
                        <div className="about-skill"><p>React</p></div>
                        <div className="about-skill"><p>Node.js</p></div>
                        <div className="about-skill"><p>Express.js</p></div>
                        <div className="about-skill"><p>MongoDB</p></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
