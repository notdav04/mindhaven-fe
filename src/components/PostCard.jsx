import { Col, Container, Row } from "react-bootstrap";

const PostCard = ({ descrizione, data, username, avatar }) => {
  return (
    <Col
      md={3}
      className="lightbg py-3 mx-sm-0 mx-md-4 my-4 rounded-3 fs-6 brownText"
    >
      <Container>
        <Row>
          <Col xs={3}>
            <img src={avatar} alt="avatar professionista" />
          </Col>
          <Col xs={3} className="offset-1">
            <p className="fw-bold">{username}</p>
          </Col>
        </Row>
        <Row>
          <p>{descrizione}</p>
        </Row>
        <Row className="text-end align-items-center">
          <p className="">{data}</p>
        </Row>
      </Container>
    </Col>
  );
};

export default PostCard;
