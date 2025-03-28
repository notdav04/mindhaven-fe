import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  Modal,
  Form
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({
  ruolo,
  username: initialUsername,
  nome: initialNome,
  cognome: initialCognome,
  email: initialEmail,
  avatar: initialAvatar
}) => {
  const [username, setUsername] = useState(initialUsername);
  const [nome, setNome] = useState(initialNome);
  const [cognome, setCognome] = useState(initialCognome);
  const [email, setEmail] = useState(initialEmail);

  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const modificaProfilo = () => {
    if (ruolo == "PROFESSIONISTA") {
      fetchModificaProfessionista();
    } else if (ruolo == "USER") {
      fetchModificaUser();
    }
  };

  const bodyProfessionista = {
    username: username,
    nome: nome,
    cognome: cognome,
    email: email
  };

  const bodyUtente = {
    username: username
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //fetch per modifica professionista
  const fetchModificaProfessionista = async () => {
    try {
      let response = await fetch(
        "http://localhost:8080/professionista/me/modifica",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
          },
          body: JSON.stringify(bodyProfessionista)
        }
      );
      if (response.ok) {
        console.log("profilo professionista aggiornato correttamente ");
        setShowAlert(true);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        console.log("errore nella modifica del profilo professionista");
        const errorText = await response.statusText;
        throw new Error(errorText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //fetch per modifica utente
  const fetchModificaUser = async () => {
    try {
      let response = await fetch("http://localhost:8080/utente/me/modifica", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bodyUtente)
      });
      if (response.ok) {
        console.log("profilo utente aggiornato correttamente ");
        setShowAlert(true);

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        console.log("errore nella modifica del profilo utente");
        const errorText = await response.statusText;
        throw new Error(errorText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCognome(cognome);
    setUsername(username);
    setNome(nome);
    setEmail(email);
    const tokenStorage = localStorage.getItem("token");
    setToken(tokenStorage);
  }, []);

  return (
    <>
      <Container className="postbg  w-75 darkText rounded-3 p-3">
        {ruolo == "PROFESSIONISTA" && (
          <Row className="mb-2">
            <Col xs={6}>
              <img
                src={initialAvatar}
                alt="avatar professionista"
                style={{ maxHeight: "150px" }}
                className="rounded-circle"
              />
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={11}>
            <p className="fw-bold fs-5 text-break">
              Username: <span className="fw-normal ms-1">{username}</span>
            </p>
          </Col>
          <Col xs={1} className="text-end">
            <i
              className="bi bi-pencil darkText fs-5"
              onClick={() => {
                setShowModal(true);
              }}
            ></i>
          </Col>
        </Row>
        {ruolo == "PROFESSIONISTA" && (
          <>
            <Row>
              <p className="fw-bold fs-5 text-break">
                Nome: <span className="fw-normal ms-1">{nome}</span>
              </p>
            </Row>
            <Row>
              <p className="fw-bold fs-5 text-break">
                Cognome: <span className="fw-normal ms-1">{cognome}</span>
              </p>
            </Row>
            <Row>
              <p className="fw-bold fs-5 text-break">
                Email: <span className="fw-normal ms-1">{email}</span>
              </p>
            </Row>
          </>
        )}
      </Container>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modifica Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              modificaProfilo();
            }}
          >
            {ruolo == "PROFESSIONISTA" && (
              <>
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
              </>
            )}
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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Button
              onClick={modificaProfilo}
              className="w-100 postButton border-0"
            >
              Modifica
            </Button>
            <p className="mx-2">
              *Dopo la modifica del profilo verrai reindirizzato alla pagina di
              login!
            </p>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className={`d-flex justify-content-${
            showAlert == true ? "between" : "end"
          }`}
        >
          <Container>
            <Row>
              <Col xs={9}>
                {showAlert == true && (
                  <p className="m-0">
                    Modifica del profilo effettuata correttamente
                  </p>
                )}
              </Col>
              <Col xs={3}>
                <Button
                  className="lightbg  darkText closeModalButton fw-bold"
                  onClick={handleCloseModal}
                >
                  Chiudi
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileCard;
