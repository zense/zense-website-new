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
        <section >
            <div className="main_banner">
                <div className="home_page_moto">
                    <div className="main_moto">
                        <h2>THINK.</h2> 
                        <h2>DEVELOP.</h2>
                        <h2>DEPLOY.</h2>
                    </div>
                </div>
                <div className="home_page_symbol">
                    <img className="main_banner_logo" src = {logo} />
                    <p>
                    A community of developers run by the students of IIIT Bangalore. <br/>
                    We work to build things and sometimes break them too. <br/> 
                    We organise events and promote open source culture at IIITB. <br/>
                    </p>
                </div>
            </div>
           <Link to="#projects" className="circle-down-arrow" onClick={executeScroll}><img src= {downArrow} className="arrow-image" /></Link>
        </section>
    )
}

export default Banner
