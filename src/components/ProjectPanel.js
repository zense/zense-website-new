import React from 'react'
import '../static/Projects.css'
import projectPicture from '../assets/projects/circuitverse.png'

function ProjectPanel() {
	return(
		
			<div class="project_panel container">
				<div className="row row-centered pos">
					<div className="col-lg-6 col-md-6 col-xs-12 col-centered">
						<img className="project_picture col-lg-12 col-md-12 col-xs-12 col-centered" src={projectPicture} />
					</div>
					<div className="col-lg-5 col-md-5 col-xs-12 col-centered">
						<span className="project_frame_u" />
						<h4 className="project_title">CircuitVerse</h4>
						<div className="project_text"> 
						Please be nice to everyone who made this because this takes a good amount of effort please be kind and nothin else i dont know what this is
						</div>
						<a className="project_button" href="https://circuitverse.org">
						<span className="project_button_text">View App</span>
						</a>
						<span className="project_frame_d" />
					</div>
				</div>
			</div>
		
		
		)
}

export default ProjectPanel