import React from 'react'
import peopleData from '../data/people.json'
import {Row,Card,Col,Container} from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../static/Team.css'
function Team() {
	let renderData = [];
	peopleData.forEach(person => {
		renderData.push(
		<Col key={person.uid} className="team-col">
			<Card border='white' bg='none' className="team-card">
				<Card.Img variant="top" src={person.data.imgsrc} />
				<Card.Title>{person.data.name}<br/><h6 className="text-muted">{person.data.caption}</h6></Card.Title>
				<Card.Text>
					<a href = {person.data.githubLink} target="_blank"><GitHubIcon className="github-icon"/></a>
					<a href = {person.data.linkedinLink} target="_blank"><LinkedInIcon className="linkedin-icon"/></a>
				</Card.Text>
			</Card>
		</Col>
	);
	})
	return(
		<section id="team">
            <h3 className="team_heading"> The Team </h3>
			<Container className="team_container">
				<div className = 'team-row'>
					{renderData}
				</div>
			</Container>
		</section>
		)
}

export default Team;
