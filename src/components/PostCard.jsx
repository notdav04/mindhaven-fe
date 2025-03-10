import { Col, Container, Row } from "react-bootstrap";

const PostCard = ({ descrizione, data, username, avatar }) => {
  return (
    <Container className="lightbg  p-3 rounded-3 m-2 brownText">
      <Row>
        <Col md={3}>
          <img src={avatar} alt="avatar professionista" />
        </Col>
        <Col md={3} className="offset-1">
          {username}
        </Col>
      </Row>
      <Row>
        <p>{descrizione}</p>
      </Row>
      <Row className="text-end align-items-center">
        <p className="">{data}</p>
      </Row>
    </Container>
  );
};

export default PostCard;
