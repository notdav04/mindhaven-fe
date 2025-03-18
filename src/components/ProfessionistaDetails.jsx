import { Col, Container, Row } from "react-bootstrap";

const ProfessionistaDetails = () => {
  const professionista = null;

  return (
    <>
      {professionista && (
        <Container>
          <Row>
            <Col>
              <p>{professionista.username}</p>
              <p>
                {professionista.nome} {professionista.cognome}
              </p>
            </Col>
          </Row>
          <Row>
            {professionista.post.map((post, index) => {
              <Col key={index} md={3}>
                <div>{professionista.username}</div>
                <div>{post.testo}</div>
              </Col>;
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProfessionistaDetails;
