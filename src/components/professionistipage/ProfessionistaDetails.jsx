import { Col, Container, Row } from "react-bootstrap";

const ProfessionistaDetails = ({ professionista }) => {
  return (
    <>
      {professionista && (
        <Container
          className="fullBoxBorder rounded-5 p-5 postbg"
          style={{ boxShadow: "7px 7px 5px -3px rgba(109,76,65,0.5)" }}
        >
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
          <p>Post: </p>
          <Row>
            {professionista.listapost &&
              professionista.listapost.map((post, index) => (
                <Col
                  key={index}
                  md={3}
                  className="lightbg postBorderBottom rounded-3 me-4 mb-4 customFont"
                >
                  <div>{professionista.username}</div>
                  <div>{post.descrizione}</div>
                </Col>
              ))}
            {(!professionista.listapost ||
              professionista.listapost.length === 0) && (
              <Col xs={12}>
                <p className="text-center fs-4 fw-bold">
                  nessun post da mostrare
                </p>
              </Col>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProfessionistaDetails;
