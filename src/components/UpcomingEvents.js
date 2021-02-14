import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import '../static/UpcomingEvents.css';
import UpcomingEventsCard from './UpcomingEventsCard';

const Data = [
  {
    Title:'CTF',
    Subtitle:'20 March 2021',
    Text:'blah blah blah blah blah blah',
    Link:'#',
    LinkText:'Know More'
  },
  {
    Title:'CTF',
    Subtitle:'20 March 2021',
    Text:'blah blah blah blah blah blah',
    Link:'#',
    LinkText:'Know More'
  },
] 

function UpcomingEvents() {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Container fluid style={{paddingLeft:'10vw',paddingRight:'5vw'}}>
        <Row className="justify-content-md-center">
          <Col > <UpcomingEventsCard Data={Data[0]}/></Col>
          <Col > <UpcomingEventsCard Data={Data[1]}/></Col>
        </Row>
      </Container>
    </div>
    );
}


export default UpcomingEvents;