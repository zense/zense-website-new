import React from 'react'
import '../static/Projects.css'
import ProjectPanel from './ProjectPanel'
import projectData from '../data/projects.json'

function Projects() {
	let renderData = [];
	projectData.forEach(project => {
		renderData.push(<ProjectPanel data={project}/>);
	})
	return(
		<div className="projects_container container">
			{renderData}
		</div>
		)
}

export default Projects