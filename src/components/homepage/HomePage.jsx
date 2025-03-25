import { Container, Row } from "react-bootstrap";

import Hero from "../Hero";
import PostSection from "./PostSection";
import NewDiariPage from "./NewDiariPage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <NewDiariPage />
      <Container fluid className="p-xs-2 p-md-5 lightbg">
        <PostSection />
      </Container>
    </>
  );
};

export default HomePage;
