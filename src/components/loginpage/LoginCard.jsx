import { useState } from "react";
import { Container, Row, Button, Col, Form } from "react-bootstrap";

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
      <Form>
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="d-flex justify-content-between">
            <span className="m-0">Password:</span>

            {password ? (
              <i
                class="bi bi-eye-slash"
                onClick={showPassword}
                style={{ margin: "0", cursor: "pointer" }}
              ></i>
            ) : (
              <i
                class="bi bi-eye"
                onClick={showPassword}
                style={{ margin: "0", cursor: "pointer" }}
              ></i>
            )}
          </Form.Label>
          <Form.Control
            type={password ? "text" : "password"}
            placeholder="Inserisci la tua password"
            required
          ></Form.Control>
        </Form.Group>

        <Button type="submit" className="postButton w-100 border-0">
          Login
        </Button>
      </Form>

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
