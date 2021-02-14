import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import '../static/UpcomingEvents.css';
import UpcomingEventsCard from './UpcomingEventsCard';

const Data = [
  {
    Title:'CTF',
    Subtitle:'20 March 2021',
    Text:'Sunt exercitation eiusmod enim cupidatat occaecat labore. Ut Lorem adipisicing consequat Lorem cillum. Esse deserunt proident deserunt ut commodo',
    Link:'#',
    LinkText:'Know More'
  },
  {
    Title:'CTF',
    Subtitle:'20 March 2021',
    Text:'Sunt exercitation eiusmod enim cupidatat occaecat labore. Ut Lorem adipisicing consequat Lorem cillum. Esse deserunt proident deserunt ut commodo',
    Link:'#',
    LinkText:'Know More'
  },
] 

function UpcomingEvents() {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Container fluid className="upcoming-events-container">
        <Row className="justify-content-md-center">
          <Col > <UpcomingEventsCard Data={Data[0]}/></Col>
          <Col > <UpcomingEventsCard Data={Data[1]}/></Col>
        </Row>
      </Container>
    </div>
    );
}


export default UpcomingEvents;