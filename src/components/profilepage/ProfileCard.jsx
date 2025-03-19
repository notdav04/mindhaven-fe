import { Container, Row, Col, Badge, Button } from "react-bootstrap";

const ProfileCard = () => {
  let username = "davide";

  return (
    <>
      <Container className="postbg postBorderBottom darkText rounded-3 p-3">
        <Row>
          <p>{username}</p>
        </Row>
      </Container>
    </>
  );
};

export default ProfileCard;
