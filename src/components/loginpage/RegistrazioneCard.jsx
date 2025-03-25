import { useState } from "react";
import { Button, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegistrazioneCard = ({ onClick }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const utente = {
    username: username,
    password: password,
    ruolo: "USER"
  };

  const showPassword = () => {
    if (password === true) {
      setPassword(false);
    } else if (password === false) {
      setPassword(true);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginUtente = async () => {
    try {
      let response = await fetch("http://localhost:8080/auth/login/utente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(utente)
      });
      if (response.ok) {
        console.log("utente loggato: " + utente);
        navigate("/Home");
      } else {
        console.log("errore nel login utente!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registrazioneUtente = async () => {
    try {
      let response = await fetch("http://localhost:8080/auth/new/utente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(utente)
      });
      if (response.ok) {
        console.log(utente);
        loginUtente();
      } else {
        console.log("errore nella registrazione ");
      }
    } catch (error) {
      console.log(error);
    }
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
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    registrazioneUtente();
                  }}
                >
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
                  <Button type="submit" className="postButton w-100 border-0">
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
