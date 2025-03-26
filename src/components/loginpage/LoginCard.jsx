import { useState } from "react";
import { Container, Row, Button, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginCard = ({ onClick }) => {
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const utente = {
    username: username,
    password: password
  };

  const showshowPassword = () => {
    if (showPassword === true) {
      setshowPassword(false);
    } else if (showPassword === false) {
      setshowPassword(true);
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
        const data = await response.json();
        console.log("utente loggato: " + JSON.stringify(data));
        localStorage.setItem("utente", JSON.stringify(data));
        localStorage.setItem("token", data.token);
        localStorage.setItem("ruolo", "USER");
        navigate("/Home");
      } else {
        console.log("errore nel login utente!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row>
        <p className="text-end fw-bold fs-5">Login</p>
      </Row>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          loginUtente();
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

            {showPassword ? (
              <i
                className="bi bi-eye-slash"
                onClick={showshowPassword}
                style={{ margin: "0", cursor: "pointer" }}
              ></i>
            ) : (
              <i
                className="bi bi-eye"
                onClick={showshowPassword}
                style={{ margin: "0", cursor: "pointer" }}
              ></i>
            )}
          </Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Inserisci la tua password"
            required
            value={password}
            onChange={handlePasswordChange}
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
