import React from 'react'
import '../static/Projects.css'
import projectPicture from '../assets/projects/circuitverse.png'

function ProjectPanel() {
	return(
		<div className="project_panel">
			<div className="project_picture" style={{backgroundImage: `url(${projectPicture})` }} />
			<div className="project_info_container">
				<span className="project_frame_u" ></span>
				<div className="project_info">
					<div className="project_info_internal">
						<div className="project_info_title">CircuitVerse</div>
						<div className="project_info_text">
						Dive into the world of Logic Circuits for free! From simple gates to complex sequential circuits, plot timing diagrams, automatic circuit generation, explore standard ICs, and much more
						</div>
					</div>
					<a className="project_button" href="https://circuitverse.org" target="_blank" >
						<span className="project_button_text">View App</span>
					</a>
				</div>
				<span className="project_frame_d"></span>
			</div>
		</div>
		)
}

export default ProjectPanel