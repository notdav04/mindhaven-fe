import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className="hero-section  position-relative">
        <div className="hero-bg"></div>
        <Container className="position-relative">
          <Row className="align-items-center ">
            <Col md={8} sm={12}>
              <div className="welcome-box p-4 p-md-5 rounded-3 shadow-lg">
                <h1 className="mb-4 fw-bold heading-color">
                  <span className="fs-2">Benvenuti in</span> MindHaven
                </h1>
                <p className="lead mb-4 text-color">
                  Uno spazio sicuro dove le parole trovano ascolto e i pensieri
                  prendono forma.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <img
                src="src/assets/HeroImg.png"
                alt="immagine sezione hero"
                style={{ scale: "0.8" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
