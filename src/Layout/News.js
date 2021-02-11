import UpcomingEvents from '../components/UpcomingEvents';
import {Container} from 'react-bootstrap';

import '../static/News.css'


function News() {
  return (
    <div>
      <Container>
        <div className="heading">Upcoming Events</div>
      </Container>
      <UpcomingEvents/>
    </div>
    )
}

export default News;