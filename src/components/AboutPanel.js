import React from 'react'
import '../static/About.css'

function AboutPanelRight(props) {
	const data = props.data.data;
	return(
		
			<div className="about_panel about_panel_right container">
				<div className="row row-centered pos">
					<div className="about_info about_info_right col-lg-6 col-md-12 col-xs-12 col-centered">
						
						<h4 className="about_title">{data.title}</h4>
						<div className="about_text"> 
							{data.text}
						</div>
					</div>
					<div className="about_picture about_picture_right col-lg-6 col-md-12 col-xs-12 col-centered">
						<object type="image/svg+xml" className="about_picture_right col-lg-12 col-md-12 col-xs-12 col-centered" data={data.imgsrc} alt={data.imgalt} />
					</div>
				</div>
			</div>
		
		)
}

function AboutPanelLeft(props) {
	const data = props.data.data;
	return(
		
			<div className="about_panel about_panel_left container">
				<div className="row row-centered pos">
					<div className="about_picture about_picture_left col-lg-6 col-md-12 col-xs-12">
						<object type="image/svg+xml" className="about_picture_left col-lg-12 col-md-12 col-xs-12" data={data.imgsrc} alt={data.imgalt} />
					</div>
					<div className="about_info about_info_left col-lg-6 col-md-12 col-xs-12 col-centered">
						
						<h4 className="about_title">{data.title}</h4>
						<div className="about_text"> 
							{data.text}
						</div>
					</div>
				</div>
			</div>

		)
}

export {
	AboutPanelRight,
	AboutPanelLeft
}
