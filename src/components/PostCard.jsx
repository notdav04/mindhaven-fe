import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const PostCard = ({ descrizione, data, username, avatar }) => {
  const [commenti, setCommenti] = useState(false);

  const gestioneCommenti = () => {
    if (commenti == false) {
      setCommenti(true);
      return;
    } else if (commenti == true) {
      setCommenti(false);
      return;
    }
  };

  return (
    <>
      <Col
        xs={12}
        md={7}
        className="postbg py-3 mx-sm-0 mx-md-4 my-4 rounded-3 fs-6 darkText postBorderBottom"
      >
        <Container className="">
          <Row className="text-end align-items-center">
            <Col xs={4} className="offset-8">
              <p className="d-inline-block">{data}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <img src={avatar} alt="avatar professionista" />
              <p className="fw-bold">{username}</p>
            </Col>
            <Col xs={3} className="offset-1">
              <p>{descrizione}</p>
            </Col>
          </Row>

          <Row>
            <Col
              xs={4}
              md={4}
              className="offset-8 text-end"
              onClick={() => gestioneCommenti()}
            >
              <Button className="d-inline-block border-0  postButton">
                {!commenti && "mostra commenti"}
                {commenti && "nascondi commenti"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Col>
      {commenti && (
        <Col
          xs={12}
          md={4}
          className="postbg py-3 mx-sm-0 mx-md-4 my-4 rounded-3 fs-6 darkText postBorderBottom"
        >
          <Container>
            <Row className=" border-1 border-bottom">
              <p className="my-0 py-0">Commenti:</p>
            </Row>
          </Container>
        </Col>
      )}
    </>
  );
};

export default PostCard;
