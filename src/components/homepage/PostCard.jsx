import { useEffect, useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

const PostCard = ({
  titolo,
  descrizione,
  data,
  username,
  avatar,
  commenti,
  id
}) => {
  const [commentiSection, setCommentiSection] = useState(false);
  const [ruolo, setRuolo] = useState(null);
  const idPost = id;

  const gestioneCommenti = () => {
    if (commentiSection == false) {
      setCommentiSection(true);
      return;
    } else if (commentiSection == true) {
      setCommentiSection(false);
      return;
    }
  };

  //per creazione commento
  const [token, setToken] = useState(null);

  const [commento, setCommento] = useState();

  const bodyCommento = {
    testo: commento
  };

  //fetch per creazione commento
  const creaCommento = async () => {
    try {
      let response = await fetch(
        `http://localhost:8080/professionista/post/${idPost}/commento`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
          },
          body: JSON.stringify(bodyCommento)
        }
      );
      if (response.ok) {
        console.log(await response);
        setCommento("");
      } else {
        console.log("errore nella creazione del commento");
        console.log(token);
        console.log(ruolo);
        const errorText = await response.statusText;
        throw new Error(errorText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const ruoloStorage = localStorage.getItem("ruolo");
    setRuolo(ruoloStorage);
    const tokenStorage = localStorage.getItem("token");
    setToken(tokenStorage);
  }, []);

  return (
    <>
      <Col
        xs={12}
        md={7}
        className="postbg py-3 mx-sm-0 mx-md-4 my-4 rounded-3 fs-6 darkText postBorderBottom"
      >
        <Container className="" style={{ minHeight: "225px" }}>
          <Row className="mb-2">
            <Col xs={8} className="text-break fw-bold fs-5">
              {titolo}
            </Col>
            <Col xs={4} className=" text-end">
              <p className="d-inline-block">{data}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <img src={avatar} alt="avatar professionista" />
              <p className="fw-bold">{username}</p>
            </Col>
            <Col xs={8} className="offset-1">
              <p className="text-break">{descrizione}</p>
            </Col>
          </Row>

          <Row className="pt-5">
            {ruolo == "PROFESSIONISTA" && (
              <Col xs={12} md={12}>
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    creaCommento();
                  }}
                >
                  <Form.Group
                    controlId="commento"
                    className="mb-3 d-flex justify-content-between align-items-center"
                  >
                    <Form.Label>Commenta: </Form.Label>
                    <Form.Control
                      className="mx-2"
                      type="text"
                      placeholder="Inserisci il commento al post "
                      required
                      value={commento}
                      onChange={(e) => {
                        setCommento(e.target.value);
                      }}
                    />
                    <Button type="submit" className="postButton w-25 border-0">
                      Commenta
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            )}
            <Col
              xs={4}
              md={4}
              className="offset-8 text-end"
              onClick={() => gestioneCommenti()}
            >
              <Button className="d-inline-block border-0  postButton">
                {!commentiSection && "mostra commenti"}
                {commentiSection && "nascondi commenti"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Col>
      {commentiSection && (
        <Col
          xs={12}
          md={4}
          className="postbg py-3 mx-sm-0 mx-md-4 my-4 rounded-3 fs-6 darkText postBorderBottom"
        >
          <Container>
            <Row className=" border-1 border-bottom">
              <p className="my-0 py-0 fw-bold">Commenti:</p>
            </Row>
            <Row
              className="overflow-y-auto scrollable"
              style={{ maxHeight: "200px", minHeight: "200px" }}
            >
              {commenti.map((commento, index) => (
                <Row key={index} className="border-bottom border-1 pb-1">
                  <Col
                    xs={5}
                    className="text-break"
                    style={{ minHeight: "80px" }}
                  >
                    {commento.usernameProfessionista}
                  </Col>
                  <Col xs={7}>
                    <p className="m-0 text-break">{commento.testo}</p>
                  </Col>
                </Row>
              ))}
            </Row>
          </Container>
        </Col>
      )}
    </>
  );
};

export default PostCard;
