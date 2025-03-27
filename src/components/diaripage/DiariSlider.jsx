import React, { useEffect, useState } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import Slider from "react-slick";

export default function DiariSlider({
  id,
  pagine,
  username,
  approvazione,
  handleUpdate
}) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [token, setToken] = useState();

  //fetch per approvazione diario
  const fetchApprovazioneDiario = async () => {
    try {
      let response = await fetch(
        `http://localhost:8080/professionista/diario/approva/${id}`,
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      if (response.ok) {
        console.log("diario pubblicato correttamente ");
        handleUpdate();
      } else {
        console.log("errore nella pubblicazione del diario!");
        const errorText = await response.statusText;
        throw new Error(errorText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    setToken(tokenStorage);
  }, []);

  return (
    <>
      <Container className="postbg py-3 my-5 rounded-5 postBorderBottom">
        <Row className="d-flex align-items-center">
          <Col xs={6}>
            <p className="pb-4 darkText fw-bold fs-3">{username}</p>
          </Col>
          {approvazione == true && (
            <Col xs={6} className="d-flex justify-content-end">
              <Button
                className="postButton border-0 mx-3"
                onClick={fetchApprovazioneDiario}
              >
                Approva Diario
              </Button>
            </Col>
          )}
        </Row>

        <Row>
          <Slider {...settings}>
            {pagine.map((pagina, index) => (
              <div style={{ maxWidth: "300px" }} className="pb-5" key={index}>
                <div className="d-flex justify-content-around">
                  <div className="w-25"></div>
                  <div className="text-center pb-3 w-50">
                    Pagina {index + 1}
                  </div>
                  <div className="text-end w-25">{pagina.data}</div>
                </div>

                <p className="text-wrap w-md-100 fs-7">{pagina.contenuto}</p>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
}
