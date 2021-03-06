import React from 'react';
import {Card,Button} from 'react-bootstrap';
import '../static/UpcomingEvents.css';


const UpcomingEventsCard = (props) => {
    const data = props.data.data;
    return(
        <div>
            <Card className="upcoming-events-card">
            <Card.Body className="upcoming-events-card-body">
                <Card.Title className="upcoming-events-card-title">
                    { data.title }
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted upcoming-events-card-subtitle">
                    { data.date }
                </Card.Subtitle>
                <Card.Text className="upcoming-events-card-text">
                    { data.text }
                </Card.Text>
                <Button variant="dark" className="upcoming-events-card-button">
                    <Card.Link href={ data.link } className="upcoming-events-card-button-text">
                        { data.linkText }
                    </Card.Link>
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default UpcomingEventsCard;