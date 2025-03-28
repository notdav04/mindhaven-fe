import { useEffect, useState } from "react";
import DiariSlider from "./DiariSlider";
import { Container, Row, Col, Button } from "react-bootstrap";

const DiariSection = () => {
  const [ruolo, setRuolo] = useState(null);
  const [token, setToken] = useState(null);

  const [diari, setDiari] = useState([]);
  const [diariApprovazione, setDiariApprovazione] = useState();
  const [diariState, setDiariState] = useState("pubblici");

  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(!update);
  };
  let render = false;

  //fetch per diari pubblici
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

  //fetch per diari in fase di approvazione
  const fetchDiariInApprovazione = async () => {
    try {
      let response = await fetch(
        "http://localhost:8080/professionista/diario/approva",
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      if (response.ok) {
        const responseLista = await response.json();
        setDiariApprovazione(responseLista);
        console.log("diari in approvazione settati correttamente");
      } else {
        console.log("errore nella fetch dei diari in approvazione!");
        const errorText = await response.statusText;
        throw new Error(errorText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiari();
  }, [render]);
  useEffect(() => {
    fetchDiari();
    fetchDiariInApprovazione();
  }, [update]);

  //set ruolo e token da storage
  useEffect(() => {
    const ruoloStorage = localStorage.getItem("ruolo");
    setRuolo(ruoloStorage);
    const tokenStorage = localStorage.getItem("token");
    setToken(tokenStorage);
  }, []);

  //fetch solo se professionista e token ok
  useEffect(() => {
    if (ruolo == "PROFESSIONISTA" && token) {
      fetchDiariInApprovazione();
    }
  }, [ruolo]);

  return (
    <>
      <Container fluid className=" ps-md-5  lightbg ">
        <Row className="mt-3 ps-3 d-flex align-items-center">
          <Col xs={2}>
            <p className="darkText pt-3 fs-3 fw-bold customFont2">Diari </p>
          </Col>
          {ruolo == "PROFESSIONISTA" && (
            <Col xs={10}>
              <Button
                className={`${
                  diariState === "pubblici"
                    ? "postButton"
                    : "closeModalButton darkText fw-bold"
                } border-0 `}
                onClick={() => {
                  setDiariState("pubblici");
                }}
              >
                Publici
              </Button>
              <Button
                className={` ${
                  diariState === "approvazione"
                    ? "postButton"
                    : "closeModalButton darkText fw-bold "
                } border-0 mx-3`}
                onClick={() => {
                  setDiariState("approvazione");
                  fetchDiariInApprovazione();
                }}
              >
                Da Approvare
              </Button>
            </Col>
          )}
        </Row>
        <Row className="d-flex justify-content-center pb-3">
          {diariState === "pubblici" && (
            <div className="w-md-50 w-100 overflow-hidden">
              {(render = true)}
              {[...diari].reverse().map((diario, index) => (
                <DiariSlider
                  id={diario.id}
                  key={index}
                  pagine={diario.pagine}
                  username={diario.utente.username}
                  approvazione={false}
                  handleUpdate={handleUpdate}
                />
              ))}
            </div>
          )}
          {diariState === "approvazione" && diariApprovazione && (
            <div className="w-md-50 w-100 overflow-hidden">
              {(render = true)}
              {[...diariApprovazione].reverse().map((diario, index) => (
                <DiariSlider
                  id={diario.id}
                  key={index}
                  pagine={diario.pagine}
                  username={diario.utente.username}
                  approvazione={true}
                  handleUpdate={handleUpdate}
                />
              ))}
              {diariApprovazione.length == 0 && (
                <div className="d-flex justify-content-center my-5">
                  <p className="fw-bold fs-5 darkText">
                    Nessun diario in fase di approvazione
                  </p>
                </div>
              )}
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};
export default DiariSection;
