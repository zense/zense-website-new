import React from 'react'
import logo from '../assets/zense_logo.png';
import '../static/Banner.css'
import downArrow from '../assets/arrow-down-circle.png'
import {Link} from 'react-router-dom'
function Banner() {
    const executeScroll = () => {
        var element = document.getElementById("projects");
        element.scrollIntoView();
    }
    return (
        <section className="main_banner">
           <img className="main_banner_logo" src = {logo} />
           <h2 className="main_title">LOREM IPSUM.</h2>
           <p>
           We are a community of developers run by the students of IIIT Bangalore <br />
           We work to build things and sometimes break them too. We organise events and promote open source culture at IIITB. We are tech enthusiasts and are looking to work with those of our kind.
           </p>
           <Link to="#projects" className="circle-down-arrow" onClick={executeScroll}><img src= {downArrow} className="arrow-image" /></Link>
        </section>
    )
}

export default Banner
