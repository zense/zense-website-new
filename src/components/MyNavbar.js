import {Nav,  Navbar} from 'react-bootstrap';
import '../static/Navbar.css'
import logo from '../assets/zense_logo.png';
function MyNavbar() {
  return(
<Navbar sticky="top" bg = "navbar">
    <Navbar.Brand className="nav_brand" href="#home">
      <img
        src= {logo}
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> 
    </Navbar.Brand>

    <Nav className = "ml-auto">
      <Nav.Link className = "nav-link" href="projects"><span>Projects</span></Nav.Link>
      <Nav.Link className = "nav-link" href="news"><span>News</span></Nav.Link>
      <Nav.Link className = "nav-link" href="blog"><span>Blog</span></Nav.Link>
      <Nav.Link className = "nav-link" href="people"><span>People</span></Nav.Link>
      <Nav.Link className = "nav-link" href="about"><span>About</span></Nav.Link>
      <Nav.Link className = "nav-link" href="contact"><span>Contact</span></Nav.Link>
    </Nav>
    

  </Navbar>)
}
export default MyNavbar