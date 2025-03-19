import { Container, Row } from "react-bootstrap";

import Hero from "../Hero";
import PostSection from "./PostSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container fluid className="p-xs-2 p-md-5 lightbg">
        <PostSection />
      </Container>
    </>
  );
};

export default HomePage;
