import { Button, Container, Row } from "react-bootstrap";

const RegistrazioneCard = ({ onClick }) => {
  return (
    <Container
      style={{
        transition: "transform 0.5s",
        transform: "rotateY(180deg)"
      }}
    >
      <Row>
        <p>Registrazione</p>
      </Row>

      <Row>
        <p>stepper</p>
      </Row>
      <Button onClick={onClick} className="postButton border-0">
        login
      </Button>
    </Container>
  );
};

export default RegistrazioneCard;
