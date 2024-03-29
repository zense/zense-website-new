import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import '../static/UpcomingEvents.css';
import UpcomingEventsCard from './UpcomingEventsCard';
import uEventData from '../data/events_upcoming.json'


function UpcomingEvents() {

  let renderData = [];
  uEventData.forEach(uEvent => {
    renderData.push(<div className="upcoming-events-col" key={uEvent.uid}><UpcomingEventsCard data={uEvent} /></div>);
  })

  return (
    <div>
      <Container fluid className="upcoming-events-container">
        <Row className="justify-content-md-center">
          {renderData}
        </Row>
      </Container>
    </div>
    );
}

export default UpcomingEvents;