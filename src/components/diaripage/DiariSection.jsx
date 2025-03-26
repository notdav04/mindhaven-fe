import { useEffect, useState } from "react";
import DiariSlider from "./DiariSlider";
import { Container, Row } from "react-bootstrap";

const DiariSection = () => {
  const [diari, setDiari] = useState([]);
  let render = false;

  const fetchDiari = async () => {
    try {
      let response = await fetch("http://localhost:8080/public/diari");
      if (response.ok) {
        let diariArray = await response.json();
        if (diariArray) {
          console.log(diariArray);
          setDiari(diariArray);
        } else {
          console.log("errore: diari non trovati");
        }
      } else {
        throw new Error("errore nel recupero dei diari");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiari();
  }, [render]);

  return (
    <>
      <Container fluid className=" ps-md-5  lightbg ">
        <p className="darkText pt-3 fs-3 fw-bold">Diari </p>
        <Row className="d-flex justify-content-center pb-3">
          <div className="w-md-50 w-100 overflow-hidden">
            {(render = true)}
            {diari.reverse().map((diario) => (
              <DiariSlider
                key={diario.id}
                pagine={diario.pagine}
                username={diario.utente.username}
              />
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};
export default DiariSection;
