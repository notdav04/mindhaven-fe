import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fluid className="darkbg " style={{ minHeight: "300px" }}>
        <Row className="p-5">
          <Col xs={12} md={6} className="d-flex justify-content-center ">
            <div>
              <img src="src/assets/LogoMH.png" alt="" className="d-block" />
              <p className="lightText">
                © 2025 MindHaven |{" "}
                <span className="fw-bold d-xs-none d-md-inline">
                  All Rights reserved
                </span>
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className=" footerSecondary footerColMiddleBorder"
          >
            <div className="p-3 pt-2">
              <p className="mb-1 fw-bold fs-5 lightText">Contatti:</p>
              <p className="mb-1">
                {" "}
                <span className="fw-bold lightText">Email:</span>{" "}
                mindhaven.it@gmail.com
              </p>
              <p>
                <span className="fw-bold lightText">Tel:</span> +39 123-456-7890
              </p>
            </div>
            <div className="ms-3 lightText">
              {/* <a href="https://github.com/notdav04" className="me-4">
                <i
                  class="bi bi-github"
                  style={{ color: "#f8f5f1", fontSize: "25px" }}
                ></i>
              </a> */}
              <a
                href="https://www.instagram.com/davide_alonzi/"
                className="me-4"
              >
                <i
                  class="bi bi-instagram"
                  style={{ color: "#f8f5f1", fontSize: "25px" }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com/davide.alonzi.1?locale=it_IT"
                className="me-4"
              >
                <i
                  class="bi bi-facebook"
                  style={{ color: "#f8f5f1", fontSize: "25px" }}
                ></i>
              </a>
              <a href="" className="me-4">
                <i
                  class="bi bi-twitter-x"
                  style={{ color: "#f8f5f1", fontSize: "25px" }}
                ></i>
              </a>
              {/* <a
                href="https://www.linkedin.com/in/davide-alonzi-65a9a32b6/"
                className="me-4"
              >
                <i
                  class="bi bi-linkedin"
                  style={{ color: "#f8f5f1", fontSize: "25px" }}
                ></i>
              </a> */}
              {/* <a href="">
                <i
                  class="bi bi-discord"
                  style={{ color: "#f8f5f1", fontSize: "25px" }}
                ></i>
              </a> */}
            </div>
            <div className="pt-4 ps-3">
              <p className="fw-bold fs-5 lightText">Alonzi Davide </p>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default Footer;
