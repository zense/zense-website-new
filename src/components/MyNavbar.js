import {Nav,  Navbar, Container} from 'react-bootstrap';
import '../static/Navbar.css'
import logo from '../assets/zense_logo.png';
import {Link} from 'react-router-dom';
function MyNavbar() {
  return(
<Navbar collapseOnSelect sticky="top" bg = "navbar" expand="lg" >
  <Container>
    <Navbar.Brand className="nav_brand" href="/">
      <img
        src= {logo}
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className = "ml-auto">
        <Nav.Link className = "nav-link" href="projects"><span>Projects</span></Nav.Link>
        <Nav.Link className = "nav-link"><Link to = "/zense-website-new/news"><span>News</span></Link></Nav.Link>
        <Nav.Link className = "nav-link" href="blog"><span>Blog</span></Nav.Link>
        <Nav.Link className = "nav-link" href="people"><span>People</span></Nav.Link>
        <Nav.Link className = "nav-link" href="about"><span>About</span></Nav.Link>
        <Nav.Link className = "nav-link" href="contact"><span>Contact</span></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>)
}
export default MyNavbar