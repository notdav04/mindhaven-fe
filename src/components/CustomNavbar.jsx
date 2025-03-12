import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="darkbg customtext">
      <Container fluid className="mx-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-100">
            <div class="d-flex justify-content-start w-25 align-items-center">
              <Nav.Link href="/Home" className="lightText">
                Home
              </Nav.Link>
              <Nav.Link href="/Diari" className="lightText">
                Diari
              </Nav.Link>
              <Nav.Link href="/Professionisti" className="lightText">
                Professionisti
              </Nav.Link>
            </div>
            <div className="w-25 d-flex justify-content-center align-items-center">
              <Navbar.Brand href="/Home">
                <img
                  src="src/assets/Logo.png"
                  alt="MindHaven Logo"
                  style={{ height: 60 }}
                />
              </Navbar.Brand>
            </div>
            <div class="d-flex justify-content-end w-25 align-items-center ">
              <Nav.Link href="/Profilo" className="lightText">
                Profilo
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
