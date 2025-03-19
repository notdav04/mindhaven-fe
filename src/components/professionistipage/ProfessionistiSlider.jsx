import React from "react";
import { Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import ProfessionistaCard from "./ProfessionistaCard";

export default function ProfessionistiSlider({
  professionisti,
  onSelectProfessionista
}) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  return (
    <>
      <Container className="postbg py-3 rounded-5 postBorderBottom mb-5">
        <Row>
          <Slider {...settings}>
            {professionisti.map((professionista, index) => (
              <ProfessionistaCard
                key={index}
                professionista={professionista}
                onSelect={onSelectProfessionista}
              />
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
}
