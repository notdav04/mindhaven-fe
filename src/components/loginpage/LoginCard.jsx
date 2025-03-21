import { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

const LoginCard = ({ onClick }) => {
  const [password, setPassword] = useState(false);

  const showPassword = () => {
    if (password === true) {
      setPassword(false);
    } else if (password === false) {
      setPassword(true);
    }
  };
  return (
    <Container>
      <Row>
        <p className="text-end fw-bold fs-5">Login</p>
      </Row>

      <Row className="mb-2">
        <Col xs={12}>
          <p className="m-0">Username:</p>
        </Col>
        <Col xs={12}>
          <input className="w-100" type="text" />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={8}>
          <p className="m-0">Password:</p>
        </Col>
        <Col xs={4} className="text-end">
          {password ? (
            <i class="bi bi-eye-slash fs-5" onClick={showPassword}></i>
          ) : (
            <i class="bi bi-eye fs-5" onClick={showPassword}></i>
          )}
        </Col>
        <Col xs={12}>
          <input className="w-100" type={password ? "text" : "password"} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Button className="postButton w-100 border-0">Login</Button>
      </Row>

      <p className="position-absolute bottom-0 text-center fs-7 ">
        Non hai un account?{" "}
        <span
          className="barkText"
          onClick={onClick}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Registrati qui
        </span>
      </p>
    </Container>
  );
};

export default LoginCard;
