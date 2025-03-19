import { Row, Container } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import DiariSlider from "../diaripage/DiariSlider";

const ProfileSection = () => {
  let username = "davide";
  let pagine = [];
  return (
    <>
      <Container fluid className="ps-md-5 pe-md-5 lightbg">
        <p className="darktext pt-3 fs-3 fw-bold">Profilo</p>
        <Row className="pb-3">
          <ProfileCard />
        </Row>
        <Row className="pb-5">
          <DiariSlider pagine={pagine} username={username} />
        </Row>
      </Container>
    </>
  );
};

export default ProfileSection;
