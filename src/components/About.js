import React from 'react'
import '../static/About.css'
import {AboutPanelLeft,AboutPanelRight} from './AboutPanel'
import AboutData from '../data/About.json'

function About() {
	let renderData = [];
	let left=false;
	AboutData.forEach(detail => {
		if(left)
		renderData.push(<AboutPanelLeft data={detail} key={detail.uid} direction={left} />);
		else
		renderData.push(<AboutPanelRight data={detail} key={detail.uid} direction={left} />);
		left=!left;
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