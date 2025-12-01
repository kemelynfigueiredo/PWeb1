import { Container, Nav, Navbar } from 'react-bootstrap';
import { PiStudentDuotone } from 'react-icons/pi';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            {/* <PiStudentDuotone style={{ marginRight: '1rem' }} /> Censo Escolar */}
            <PiStudentDuotone className="distancialogo" /> Censo Escolar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Instituições Ensino</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
