import { Container, Row } from "react-bootstrap";

import Hero from "../Hero";
import PostSection from "./PostSection";
import NewDiariPage from "./NewDiariPage";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [ruolo, setRuolo] = useState(null);

  useEffect(() => {
    const ruoloStorage = localStorage.getItem("ruolo");
    setRuolo(ruoloStorage);
  }, []);
  return (
    <>
      <Hero />
      {ruolo == "USER" && <NewDiariPage />}
      <Container fluid className="p-xs-2 p-md-5 lightbg">
        <PostSection />
      </Container>
    </>
  );
};

export default HomePage;
