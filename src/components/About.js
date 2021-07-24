import React from 'react'
import '../static/About.css'
import AboutPanel from './AboutPanel'
import AboutData from '../data/About.json'

function About() {
	let renderData = [];
	AboutData.forEach(detail => {
		renderData.push(<AboutPanel data={detail} key={detail.uid} />);
	})
	return(
		<section id="about">
			<div className="about_container container">
				{renderData}
			</div>
		</section>
		)
}

export default About