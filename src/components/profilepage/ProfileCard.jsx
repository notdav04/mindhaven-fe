import { Container, Row, Col, Badge, Button } from "react-bootstrap";

const ProfileCard = ({ ruolo, username, nome, cognome, email }) => {
  return (
    <>
      <Container className="postbg postBorderBottom w-75 darkText rounded-3 p-3">
        <Row>
          <p className="fw-bold fs-5 text-break">
            Username: <span className="fw-normal ms-1">{username}</span>
          </p>
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
    </>
  );
};

export default ProfileCard;
