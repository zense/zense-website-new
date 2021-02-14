import React from 'react';
import {Card,Button} from 'react-bootstrap';

const UpcomingEventsCard = ({Data}) => {
    return(
        <div>
            <Card style={{borderRadius:'1vw',textAlign:'left'}}>
            <Card.Body >
                <Card.Title>{Data.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{Data.Subtitle}</Card.Subtitle>
                <Card.Text style={{textAlign:'left'}}>
                    {Data.Text}
                </Card.Text>
                <Button variant="dark" style={{borderRadius:'2vw'}}>
                    <Card.Link href={Data.Link} style={{color:'white'}}>{Data.LinkText}</Card.Link>
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default UpcomingEventsCard;