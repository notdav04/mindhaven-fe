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
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear"
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
                professionistaAvatar={professionista.avatar}
                onSelect={onSelectProfessionista}
              />
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
}
