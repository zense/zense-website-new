import MyNavbar from '../components/MyNavbar';
import UpcomingEvents from '../components/UpcomingEvents';

import '../static/News.css'


function News() {
  return (
    <div>
        <div className="heading">Upcoming Events</div>
        <UpcomingEvents/>
    </div>
    )
}

export default News;