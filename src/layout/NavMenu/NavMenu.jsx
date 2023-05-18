import {  Container, Navbar, Nav } from "../../utilis/Bootstrap.jsx";

export default function NavMenu() {

  return (
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Nav.Link href="#root">Late Night Jam</Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto">
                <Nav.Link href="#page1">Pause/Go</Nav.Link>                
                <Nav.Link href="#page2">Continous</Nav.Link>
                <Nav.Link>WIP: Vid Bg</Nav.Link>
                <Nav.Link>WIP: Modal v2</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

