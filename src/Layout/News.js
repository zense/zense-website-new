import UpcomingEvents from '../components/UpcomingEvents';
import {Container,Row,Col} from 'react-bootstrap';
import '../static/News.css'


function News() {
  return (
    <div>
      <Container fluid> 
        <Row >
            <Col >
            <div className="upcoming-event-title">Upcoming Events</div>
            </Col>
        </Row>
        <Row>
            <Col>
              <UpcomingEvents/>
            </Col>
        </Row>
      </Container>
    </div>
    )
}

export default News;