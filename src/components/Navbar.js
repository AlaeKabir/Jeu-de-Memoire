import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavigationBarFunction() {
  return (
    <>
      <Navbar className="custom-navbar" >
        <Container>
          <Navbar.Brand as={Link} to="/">Matching Pairs</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/game">Play</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Feedback</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBarFunction;