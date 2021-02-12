import React from 'react'
import '../static/Projects.css'

function ProjectPanel(props) {
	const data = props.data.data;
	return(
		
			<div class="project_panel container">
				<div className="row row-centered pos">
					<div className="col-lg-6 col-md-6 col-xs-12 col-centered">
						<img className="project_picture col-lg-12 col-md-12 col-xs-12 col-centered" src={data.imgsrc} alt={data.imgalt} />
					</div>
					<div className="col-lg-5 col-md-5 col-xs-12 col-centered">
						<span className="project_frame_u" />
						<h4 className="project_title">{data.title}</h4>
						<div className="project_text"> 
						{data.text}
						</div>
						<a className="project_button" href={data.link}>
						<span className="project_button_text">View App</span>
						</a>
						<span className="project_frame_d" />
					</div>
				</div>
			</div>
		
		
		)
}

export default ProjectPanel