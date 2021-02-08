import React from 'react'
import Bootstrap from 'react-bootstrap'
import logo from '../assets/zense_logo.png';
import '../static/Banner.css'
function Banner() {
    return (
        <section className="main_banner">
           <img className="main_banner_logo" src = {logo} />
           <h2 className="main_title">LOREM IPSUM.</h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
        </section>
    )
}

export default Banner
