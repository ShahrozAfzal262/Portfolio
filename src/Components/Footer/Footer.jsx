import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I’m learning to build full-stack web applications with the MERN stack and growing my skills through practice.</p>
                </div>
                <div className="footer-top-right">
                    <AnchorLink className="footer-contact-link anchor-link" offset={50} href="#contact">Get in touch</AnchorLink>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>@ 2024 Shahroz Afzal. All right reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
