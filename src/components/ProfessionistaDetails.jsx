import { Col, Container, Row } from "react-bootstrap";

const ProfessionistaDetails = ({ professionista }) => {
  return (
    <>
      {professionista && (
        <Container className="fullBoxBorder rounded-5 p-5">
          <Row>
            <Col>
              <p className="fs-2 customFont fw-bold">
                {professionista.username}
              </p>
              <p className="fs-4">
                {professionista.nome} {professionista.cognome}
              </p>
            </Col>
          </Row>
          <p>post del professionista: </p>
          <Row>
            {professionista.listapost &&
              professionista.listapost.map((post, index) => (
                <Col
                  key={index}
                  md={3}
                  className="bg-light postBorderBottom rounded-3 me-4 mb-4 customFont"
                >
                  <div>{professionista.username}</div>
                  <div>{post.descrizione}</div>
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProfessionistaDetails;
