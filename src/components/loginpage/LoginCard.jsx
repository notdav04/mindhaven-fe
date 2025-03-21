import { Container, Row, Button } from "react-bootstrap";

const LoginCard = ({ onClick }) => {
  return (
    <Container>
      <Row>
        <p className="text-end">Login</p>
      </Row>

      <Row>
        <p>stepper</p>
      </Row>

      <Button onClick={onClick} className="postButton border-0">
        registrazione
      </Button>
    </Container>
  );
};

export default LoginCard;
