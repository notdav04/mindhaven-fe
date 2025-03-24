import { useState } from "react";
import { Button, Container, Row, Form } from "react-bootstrap";

const RegistrazioneCard = ({ onClick }) => {
  const [step, setStep] = useState(1);

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const showPassword = () => {
    if (password === true) {
      setPassword(false);
    } else if (password === false) {
      setPassword(true);
    }
  };

  const setCredenziali = () => {
    console.log("password: " + password);
    console.log("username: " + username);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Container
        className="position-relative"
        style={{
          transition: "transform 0.5s",
          transform: "rotateY(180deg)"
        }}
      >
        <Row>
          <p className="fs-5 fw-bold">Registrazione</p>
        </Row>

        <Row>
          <Container>
            {step == 1 && (
              <>
                <Row>
                  <h2>Entra in MindHaven!</h2>
                  <p>prosegui per registrarti</p>
                </Row>
                <Row>
                  <Button
                    className="postButton border-0"
                    onClick={() => {
                      setStep(2);
                    }}
                  >
                    Successivo
                  </Button>
                </Row>
              </>
            )}
            {step == 2 && (
              <>
                <Form>
                  <Form.Group controlId="username" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo username"
                      required
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="d-flex justify-content-between">
                      <span className="m-0">Password:</span>

                      {password ? (
                        <i
                          className="bi bi-eye-slash"
                          onClick={showPassword}
                          style={{ margin: "0", cursor: "pointer" }}
                        ></i>
                      ) : (
                        <i
                          className="bi bi-eye"
                          onClick={showPassword}
                          style={{ margin: "0", cursor: "pointer" }}
                        ></i>
                      )}
                    </Form.Label>
                    <Form.Control
                      type={password ? "text" : "password"}
                      placeholder="Inserisci la tua password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    type="submit"
                    onClick={() => {
                      setCredenziali();
                    }}
                    className="postButton w-100 border-0"
                  >
                    Registrati
                  </Button>
                </Form>
              </>
            )}
          </Container>
        </Row>
      </Container>
      <p
        className="position-absolute bottom-0 text-center w-100 fs-7 "
        style={{ transform: "rotateY(180deg)" }}
      >
        Hai gia un account?{" "}
        <span
          className="barkText"
          onClick={onClick}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Login
        </span>
      </p>
    </>
  );
};

export default RegistrazioneCard;
