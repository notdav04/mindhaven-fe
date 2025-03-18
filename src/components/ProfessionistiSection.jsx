import { useEffect, useState } from "react";
import ProfessionistaCard from "./ProfessionistaCard";
import { Container, Row } from "react-bootstrap";
import ProfessionistiSlider from "./ProfessionistiSlider.jsx";
import ProfessionistaDetails from "./ProfessionistaDetails.jsx";

const ProfessionistiSection = () => {
  const [professionisti, setProfessionisti] = useState([]);

  let render = false;
  const fetchProfessionisti = async () => {
    try {
      let response = await fetch("http://localhost:8080/public/professionisti");
      if (response.ok) {
        let professionistiArray = await response.json();
        if (professionistiArray) {
          console.log(professionistiArray);
          setProfessionisti(professionistiArray);
        } else {
          console.log("errore: professionisti non trovati");
        }
      } else {
        throw new Error("errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfessionisti();
  }, [render]);

  return (
    <>
      <Container fluid className=" ps-md-5 pe-md-5 lightbg ">
        <p className="darkText pt-3 fs-3 fw-bold">Professionisti </p>
        <Row className="d-flex justify-content-center pb-3">
          <div className="w-md-50 w-100 overflow-hidden">
            <Row className="d-md-none">
              {(render = true)}
              {professionisti.reverse().map((professionista, index) => (
                <ProfessionistaCard
                  key={index}
                  professionista={professionista}
                />
              ))}
            </Row>
            <Row xs={0} md={12} className="d-none d-md-inline">
              <ProfessionistiSlider professionisti={professionisti} />
              <ProfessionistaDetails />
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProfessionistiSection;
