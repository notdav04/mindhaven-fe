import { Col, Container, Row, Button, Modal, Form } from "react-bootstrap";
import LoginCard from "./LoginCard";
import RegistrazioneCard from "./RegistrazioneCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingSection = () => {
  const navigate = useNavigate();
  //per selezione registrazione o login
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

  //per modale e sezione professionisti
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState();
  const [cognome, setCognome] = useState();
  const [email, setEmail] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalState, setModalState] = useState("registrazione");
  const [showPassword, setshowPassword] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
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

  const bodyRegistrazione = {
    nome: nome,
    cognome: cognome,
    email: email,
    username: username,
    password: password,
    ruolo: "PROFESSIONISTA"
  };
  const bodyLogin = {
    username: username,
    password: password
  };

  //fetch per registrazione professionisti

  const registrazioneProfessionisti = async () => {
    try {
      let response = await fetch(
        "http://localhost:8080/auth/new/professionista",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bodyRegistrazione)
        }
      );
      if (response.ok) {
        console.log(bodyRegistrazione);
        loginProfessionisti();
      } else {
        console.log("errore nella registrazione ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //fetch per login professionisti
  const loginProfessionisti = async () => {
    try {
      let responselogin = await fetch(
        "http://localhost:8080/auth/login/professionista",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bodyLogin)
        }
      );
      if (responselogin.ok) {
        const data = await responselogin.json();
        console.log("professionista loggato: " + JSON.stringify(data));
        localStorage.setItem("professionista", JSON.stringify(data));
        localStorage.setItem("token", data.token);
        localStorage.setItem("ruolo", "PROFESSIONISTA");
        navigate("/Home");
      } else {
        console.log("errore nel login professionista!");
      }
      console.log(bodyLogin);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="mx-md-auto mt-5 mb-5  p-5 postbg postBorderBottom rounded-5 ">
        <Row>
          <Col md={6} className="my-auto p-md-5 p-sm-4  ">
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
      <Container fluid className="mb-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6} className="text-end">
            <p className="m-0  ">
              Sei uno psicologo o un volontario specializzato?
            </p>
          </Col>
          <Col md={6}>
            <Button
              className="postButton border-0 ms-1"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Lavora con noi
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sezione Professionisti</Modal.Title>
        </Modal.Header>
        {modalState == "registrazione" && (
          <Modal.Body>
            <h4 className="mb-2">Registrazione</h4>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                registrazioneProfessionisti();
              }}
            >
              <Form.Group controlId="nome" className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo nome"
                  required
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="cognome" className="mb-3">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo cognome"
                  required
                  value={cognome}
                  onChange={(e) => {
                    setCognome(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci la tua email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="username" className="mb-3">
                <Form.Label>
                  Username{" "}
                  <span className="text-secondary">
                    (min 3 caratteri, max 25 caratteri)
                  </span>
                </Form.Label>
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
                  <span className="m-0">
                    Password:{" "}
                    <span className="text-secondary">
                      (min 3 caratteri, max 25 caratteri)
                    </span>
                  </span>

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
                Registrati
              </Button>
            </Form>
          </Modal.Body>
        )}
        {modalState == "login" && (
          <Modal.Body>
            <h4 className="mb-2">Login</h4>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                loginProfessionisti();
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
          </Modal.Body>
        )}
        <Modal.Footer className="d-flex justify-content-between">
          {modalState == "registrazione" && (
            <Button
              className="postButton border-0"
              onClick={() => {
                setModalState("login");
              }}
            >
              Login
            </Button>
          )}
          {modalState == "login" && (
            <Button
              className="postButton border-0"
              onClick={() => {
                setModalState("registrazione");
              }}
            >
              Registrazione
            </Button>
          )}
          <Button
            className="lightbg  darkText closeModalButton fw-bold"
            onClick={handleCloseModal}
          >
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LandingSection;
