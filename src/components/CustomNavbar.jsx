import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  const [locationOk, setLocationOk] = useState();
  useEffect(() => {
    console.log(location.pathname);
  }, []);

  const determinaLocation = () => {
    if (
      location.pathname == "/Home" ||
      location.pathname == "/Diari" ||
      location.pathname == "/Professionisti" ||
      location.pathname == "/Profilo"
    ) {
      setLocationOk(true);
    } else {
      setLocationOk(false);
    }
  };
  useEffect(() => {
    determinaLocation();
  }, [location]);
  return (
    <Navbar
      expand="lg"
      className="darkbg navbarProperties customtext customFont2"
    >
      <Container fluid className="mx-5 d-xs-flex justify-content-center">
        <Navbar.Brand
          href={locationOk == true ? "/Home" : "/"}
          className="pb-0"
        >
          <img
            src="src/assets/LogoCompleto.png"
            alt="MindHaven Logo"
            style={{ height: 65 }}
          />
        </Navbar.Brand>

        {locationOk == true && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ms-5 d-md-flex justify-content-between w-100">
                <div className="d-md-flex justify-content-start w-25 align-items-center">
                  <Nav.Link href="/Home" className="lightText customFont">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/Diari" className="lightText customFont">
                    Diari
                  </Nav.Link>
                  <Nav.Link
                    href="/Professionisti"
                    className="lightText customFont"
                  >
                    Professionisti
                  </Nav.Link>
                </div>
                <div className="w-25 d-flex justify-content-center align-items-center"></div>
                <div className="d-flex justify-content-end w-25 align-items-center ">
                  <Nav.Link
                    href="/Profilo"
                    className="darkText rounded-pill px-5 bg-white customFont fw-bold lightbg"
                  >
                    Profilo
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
