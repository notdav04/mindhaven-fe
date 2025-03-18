import React from "react";
import { Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import ProfessionistaCard from "./ProfessionistaCard";

export default function ProfessionistiSlider({ professionisti }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <>
      <Container className="postbg py-3 rounded-5 postBorderBottom">
        <Row>
          <Slider {...settings}>
            {professionisti.map((professionista, index) => (
              <ProfessionistaCard key={index} professionista={professionista} />
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
}
