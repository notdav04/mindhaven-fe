import { Button, Card, Badge, Col } from "react-bootstrap";

const ProfessionistaCard = ({ professionista, onSelect }) => {
  const { username, nome, cognome, email } = professionista;
  const handleClick = () => {
    onSelect(professionista);
  };
  return (
    <>
      <Col xs={12} md={3} className="mb-3 ms-3 ">
        <Card
          className=" d-inline-block postBorderBottom  "
          style={{
            minWidth: "250px",
            boxShadow: "4px 4px 5px -3px rgba(109,76,65,0.5)"
          }}
          onClick={() => {
            handleClick();
          }}
        >
          <Card.Img variant="top" src="{avatar}" />
          <Card.Body>
            <Card.Title>{username}</Card.Title>
            <Card.Text>
              <span className="d-block">
                {nome} {cognome}
              </span>
            </Card.Text>
            <p className="text-secondary text-end fs-7 ">
              <span className="p-1 lightbg rounded-3">{email}</span>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProfessionistaCard;
