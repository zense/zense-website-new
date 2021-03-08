import React from 'react'
import '../static/Projects.css'
import ProjectPanel from './ProjectPanel'
import projectData from '../data/projects.json'

function Projects() {
	let renderData = [];
	projectData.forEach(project => {
		renderData.push(<ProjectPanel data={project} key={project.uid} />);
	})
	return(
		<section id="projects">
			<div className="projects_container container">
				{renderData}
			</div>
		</section>
		)
}

export default Projects