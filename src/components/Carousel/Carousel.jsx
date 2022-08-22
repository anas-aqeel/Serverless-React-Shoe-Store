import React from "react";
import "./carousel.css";
import Carousel from "react-elastic-carousel";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { testimonialsList } from "../../siteConfig";
import { RenderCard } from "../../sections/Testimonials/Testimonials";
import { CustomIconButton } from "../../components/Buttons/MuiIconButtons";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
];

const handleArrows = (e) => {
  return e.type === "NEXT" ? (
    <CustomIconButton
      onClick={e.onClick}
      style={{
        alignSelf: 'center',
        background: "linear-gradient(99.25deg, #6193E3 9.55%, #F96758 96.08%)",
      }}
      className="testimonials-arrows"
    >
      <EastIcon style={{ color: "#f1dfdf" }} />
    </CustomIconButton>
  ) : (
    <CustomIconButton
      onClick={e.onClick}
      style={{
        alignSelf: 'center',
        outline: "1px solid #9b9999",
        background: "transparent",
      }}
      className="testimonials-arrows"
    >
      <WestIcon style={{ color: "#9b9999" }} />
    </CustomIconButton>
  );
};

export default function CustomCarousel() {
  return (
    <div className="Carousel">
      <div className="controls-wrapper"></div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel
          disableArrowsOnEnd={false}
          renderArrow={(e) => handleArrows(e)}
          breakPoints={breakPoints}
          pagination={false}
        >
          {testimonialsList.map((item, index) => (
            <RenderCard
              key={index}
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
