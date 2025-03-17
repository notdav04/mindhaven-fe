import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();
  const [homeLocation, setHomeLocation] = useState(false);
  const [diariLocation, setDiariLocation] = useState(false);
  const [professionistiLocation, setProfessionistiLocation] = useState(false);

  const determinaLocation = () => {
    if (location.pathname == "/Home") {
      setHomeLocation(true);
    } else if (location.pathname == "/Diari") {
      setDiariLocation(true);
    } else if (location.pathname == "/Professionisti") {
      setProfessionistiLocation(true);
    }
  };

  useEffect(() => {
    determinaLocation();
  }, []);
  return (
    <>
      <div className="hero-section  position-relative">
        <div className="hero-bg"></div>
        <Container className="position-relative">
          <Row className="align-items-center ">
            <Col md={8} sm={12}>
              <div className="welcome-box p-4 p-md-5 rounded-3 shadow-lg">
                {homeLocation && (
                  <>
                    <h1 className="mb-4 fw-bold heading-color customFont">
                      <p>
                        <span className="fs-2">Benvenuto in</span> MindHaven
                      </p>
                    </h1>
                    <p className="lead mb-4 text-color">
                      Uno spazio sicuro dove le parole trovano ascolto e i
                      pensieri prendono forma.
                    </p>
                  </>
                )}
                {diariLocation && (
                  <>
                    <h1 className="mb-4 fw-bold heading-color customFont">
                      <p>
                        <span className="fs-2">Scopri i</span> Diari
                      </p>
                    </h1>
                    <p className="lead mb-4 text-color">
                      I diari tengono traccia dei percorsi degli utenti,
                      registrando progressi, sfide e momenti significativi nel
                      loro viaggio verso il benessere emotivo. Questo strumento
                      permette di riflettere sulle esperienze vissute e di
                      visualizzare la propria evoluzione nel tempo, offrendo
                      preziosi spunti di consapevolezza e crescita personale.
                    </p>
                  </>
                )}
                {professionistiLocation && (
                  <>
                    <h1 className="mb-4 fw-bold heading-color customFont">
                      <p>
                        <span className="fs-2">Incontra i</span> Professionisti
                      </p>
                    </h1>
                    <p className="lead mb-4 text-color">
                      I professionisti offrono supporto specializzato agli
                      utenti, guidandoli nel loro percorso di crescita personale
                      e benessere emotivo. Grazie alla loro esperienza, aiutano
                      a comprendere sfide, sviluppare strategie efficaci e
                      trovare nuove prospettive. Questo spazio consente di
                      entrare in contatto con esperti pronti ad ascoltare e
                      fornire strumenti concreti per affrontare il cambiamento
                      con consapevolezza e fiducia.
                    </p>
                  </>
                )}
              </div>
            </Col>
            <Col md={4}>
              {homeLocation && (
                <img
                  className="d-none d-md-block"
                  src="src/assets/HeroImg.png"
                  alt="immagine sezione hero"
                  style={{ scale: "0.8" }}
                />
              )}
              {diariLocation && (
                <img
                  className="d-none d-md-block"
                  src="src/assets/diario.png"
                  alt="immagine sezione hero"
                  style={{ scale: "0.8" }}
                />
              )}
              {professionistiLocation && (
                <img
                  className="d-none d-md-block"
                  src="src/assets/professionista.png"
                  alt="immagine sezione hero"
                  style={{ scale: "0.6" }}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
