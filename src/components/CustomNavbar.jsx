import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="darkbg customtext">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-100">
            <div class="d-flex justify-content-center w-25 align-items-center">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Diari">Diari</Nav.Link>
              <Nav.Link href="/Professionisti">Professionisti</Nav.Link>
            </div>
            <div className="w-25 d-flex justify-content-center align-items-center">
              <Navbar.Brand href="/Home">
                <img
                  src="src/assets/Logo.png"
                  alt="MindHaven Logo"
                  style={{ height: 80 }}
                />
              </Navbar.Brand>
            </div>
            <div class="d-flex justify-content-end w-25 align-items-center">
              <Nav.Link href="/Profilo">Profilo</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
