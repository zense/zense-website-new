import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.svg';
function MyNavbar() {
  return(
<Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src= {logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> 
    </Navbar.Brand>
  </Navbar>)
}
export default MyNavbar