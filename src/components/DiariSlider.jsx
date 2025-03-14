import React from "react";
import { Row, Container } from "react-bootstrap";
import Slider from "react-slick";

export default function DiariSlider({ pagine, username }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Container className="postbg py-3 rounded-5 postBorderBottom">
        <p className="pb-4 darkText fw-bold fs-3">{username}</p>

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
