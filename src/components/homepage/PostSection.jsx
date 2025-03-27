import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import PostCard from "./PostCard";

const PostSection = () => {
  //per modale aggiunta post
  const [showModal, setShowModal] = useState(false);
  const [titoloPost, setTitoloPost] = useState("");
  const [contenutoPost, setContenutoPost] = useState("");
  const [token, setToken] = useState(null);
  const [ruolo, setRuolo] = useState();
  const bodyPost = {
    titolo: titoloPost,
    descrizione: contenutoPost
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //per sezione post
  const [posts, setPosts] = useState([]);
  let render = false;

  //fetch per ottenere post
  const fetchpost = async () => {
    try {
      let response = await fetch("http://localhost:8080/public/post");
      if (response.ok) {
        let postArray = await response.json();
        if (postArray) {
          console.log(postArray);

          setPosts(postArray);
        } else {
          console.log("Errore: post non trovati");
        }
      } else {
        throw new Error("errore nel recupero dei post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //fetch per creazione post
  const creaPost = async () => {
    try {
      let response = await fetch(
        "http://localhost:8080/professionista/post/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(bodyPost)
        }
      );
      if (response.ok) {
        console.log(await response);
        setShowModal(false);
      } else {
        console.log("errore nel crea post");
        const errorText = await response.text();
        console.log(token);
        console.log(ruolo);
        throw new Error(errorText);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchpost();
  }, [render]);
  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    setToken(tokenStorage);
    const ruoloStorage = localStorage.getItem("ruolo");
    setRuolo(ruoloStorage);
  }, []);
  useEffect(() => {
    setContenutoPost("");
    setTitoloPost("");
  }, [showModal]);
  return (
    <>
      <Container className="ms-md-5 ps-md-5 lightbg ">
        <Row className="d-flex ps-4  align-items-center">
          <Col xs={6}>
            <p className="darkText pt-3 fs-3 fw-bold">Post Recenti </p>
          </Col>
          {ruolo == "PROFESSIONISTA" && (
            <Col xs={6}>
              <Button
                className="postButton border-0"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Crea Post
              </Button>
            </Col>
          )}
        </Row>
        <Row className="d-flex justify-content-start">
          {(render = true)}
          {[...posts].reverse().map((post, index) => (
            <PostCard
              key={index}
              titolo={post.titolo}
              descrizione={post.descrizione}
              data={post.data}
              username={post.usernameProfessionista}
              commenti={post.commenti}
              id={post.id}
              avatar={"non disponibile"}
            />
          ))}
        </Row>
      </Container>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Crea un nuovo post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              creaPost();
            }}
          >
            <Form.Group controlId="titolo">
              <Form.Label>Titolo post</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il titolo del post"
                required
                value={titoloPost}
                onChange={(e) => {
                  setTitoloPost(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="contenuto" className="my-4">
              <Form.Label>Contenuto del post</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il contenuto del post"
                required
                value={contenutoPost}
                onChange={(e) => {
                  setContenutoPost(e.target.value);
                }}
              />
            </Form.Group>
            <Button type="submit" className="postButton border-0 w-100 mb-4">
              Crea post
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="closeModalButton darkText fw-bold"
            onClick={handleCloseModal}
          >
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostSection;
