import React from 'react'
import '../static/About.css'

function AboutPanel(props) {
	const data = props.data.data;
	return(
		
			<div className="about_panel container">
				<div className="row row-centered pos">
					<div className="about_info col-lg-6 col-md-12 col-xs-12 col-centered">
						
						<h4 className="about_title">{data.title}</h4>
						<div className="about_text"> 
							{data.text}
						</div>
					</div>
					<div className="about_picture col-lg-6 col-md-12 col-xs-12 col-centered">
						<img className="about_picture col-lg-12 col-md-12 col-xs-12 col-centered" src={data.imgsrc} alt={data.imgalt} />
					</div>
				</div>
			</div>
		
		
		)
}

export default AboutPanel