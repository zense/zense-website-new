import React from 'react';
import {Card,Button} from 'react-bootstrap';
import '../static/UpcomingEvents.css';


const UpcomingEventsCard = ({Data}) => {
    return(
        <div>
            <Card className="upcoming-events-card">
            <Card.Body className="upcoming-events-card-body">
                <Card.Title className="upcoming-events-card-title">
                    { Data.Title }
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted upcoming-events-card-subtitle">
                    { Data.Subtitle }
                </Card.Subtitle>
                <Card.Text className="upcoming-events-card-text">
                    { Data.Text }
                </Card.Text>
                <Button variant="dark" className="upcoming-events-card-button">
                    <Card.Link href={ Data.Link } className="upcoming-events-card-button-text">
                        { Data.LinkText }
                    </Card.Link>
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default UpcomingEventsCard;