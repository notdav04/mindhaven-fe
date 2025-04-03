import { Button, Card, Badge, Col } from "react-bootstrap";

const ProfessionistaCard = ({
  professionista,
  onSelect,
  professionistaAvatar
}) => {
  const { username, nome, cognome, email } = professionista;
  const handleClick = () => {
    onSelect(professionista, professionistaAvatar);
  };
  return (
    <>
      <Col xs={12} md={3} className="mb-3 ms-3 ">
        <Card
          className=" d-inline-block postBorderBottom  "
          style={{
            maxHeight: "389px",
            minWidth: "250px",
            boxShadow: "4px 4px 5px -3px rgba(109,76,65,0.5)"
          }}
          onClick={() => {
            handleClick();
          }}
        >
          <Card.Img
            variant="top"
            src={professionistaAvatar}
            style={{ scale: "0.5", maxHeight: "250px", minHeight: "250px" }}
            className="rounded-circle"
          />
          <Card.Body>
            <Card.Title className="text-break">{username}</Card.Title>
            <Card.Text>
              <span className="d-block text-break">
                {nome} {cognome}
              </span>
            </Card.Text>
            <p className="text-secondary text-end fs-7 text-break ">
              <span className="p-1 lightbg rounded-3">{email}</span>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProfessionistaCard;
