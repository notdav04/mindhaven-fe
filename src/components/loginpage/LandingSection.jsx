import { Col, Container, Row } from "react-bootstrap";
import LoginCard from "./LoginCard";
import RegistrazioneCard from "./RegistrazioneCard";
import { useState } from "react";

const LandingSection = () => {
  const [activeCard, setActiveCard] = useState("login");
  const [rotate, setRotate] = useState(true);
  const handleLoginClick = () => {
    setRotate(true);
    setTimeout(() => {
      setActiveCard("login");
    }, 500);
  };

  const handleRegistrazioneClick = () => {
    setRotate(false);
    setTimeout(() => {
      setActiveCard("registrazione");
    }, 500);
  };

  return (
    <>
      <Container className="mx-md-auto mt-5  p-5 postbg postBorderBottom rounded-5 ">
        <Row>
          <Col md={6} className="my-auto p-5 ">
            <h1 className="mb-4 fw-bold heading-color customFont">
              <p>
                <span className="fs-2">Entra in</span> MindHaven
              </p>
            </h1>
            <p className="lead mb-4 text-color">
              Parla liberamente, senza paura. Il supporto di cui hai bisogno, in
              totale anonimato. Registrati ora e inizia il tuo percorso verso il
              benessere.
            </p>
          </Col>
          <Col xs={12} md={6} className="">
            <Container
              className="fullBoxBorder lightbg rounded-3  "
              style={{
                minHeight: "350px",
                maxWidth: "300px",
                boxShadow: "7px 7px 5px -3px rgba(109,76,65,0.5)",
                transition: "transform 1s ease-in-out",
                transform: rotate ? "rotateY(0deg)" : "rotateY(180deg)"
              }}
            >
              {activeCard === "login" && (
                <LoginCard onClick={handleRegistrazioneClick} />
              )}
              {activeCard === "registrazione" && (
                <RegistrazioneCard onClick={handleLoginClick} />
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingSection;
