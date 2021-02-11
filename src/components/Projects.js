import React from 'react'
import '../static/Projects.css'
import ProjectPanel from './ProjectPanel'

function Projects() {
	return(
		<div className="projects_container container">
			<ProjectPanel />
			<ProjectPanel />
			<ProjectPanel />
		</div>
		)
}

export default Projects