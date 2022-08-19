import React from "react";
import Carousel from "react-elastic-carousel";
import { testimonialsList } from "../../siteConfig";
import { RenderCard } from "../Testimonials/Testimonials";
import "./carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function CustomCarousel() {
  return (
    <div className="Carousel">
      <div className="controls-wrapper"></div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {testimonialsList.map((item) => (
            <RenderCard
              avatar={item.avatar}
              review={item.review}
              rating={item.rating}
              name={item.name}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
