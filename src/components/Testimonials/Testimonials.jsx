import React from "react";
import { CustomIconButton } from "../Buttons/MuiIconButtons";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./testimonials.css";
import CustomCarousel from "../Carousel/Carousel";

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonials-head">
        <div className="testimonials-heading">
          What our <br /> <span>Customer Says</span>
        </div>
        <div>
          <CustomIconButton
            style={{ outline: "1px solid #9b9999", background: "transaprent" }}
            className="testimonials-arrows"
          >
            <WestIcon style={{ color: "#9b9999" }} />
          </CustomIconButton>
          <CustomIconButton
            style={{
              background:
                "linear-gradient(99.25deg, #6193E3 9.55%, #F96758 96.08%)",
            }}
            className="testimonials-arrows"
          >
            <EastIcon style={{ color: "#f1dfdf" }} />
          </CustomIconButton>
        </div>
      </div>
      <div className="testimonials-body">
          {/* <CustomCarousel/> */}
      </div>
    </div>
  );
};

export const RenderCard = ({ avatar, review, rating, name }) => {

  return (
    <Card elevation={0} sx={{ width: 345, background: "transparent" }}>
      <CardActionArea>
        <Avatar
          alt="Remy Sharp"
          src={avatar}
          sx={{
            width: 70,
            height: 70,
            mx: "auto",
            mt: 3,
            background: "#D9D9D9",
          }}
        />
        <CardContent>
          <Typography align="center" variant="body2" sx={{ color: "#8A8A8A" }}>
            {review}
          </Typography>
          <Typography align="center" sx={{ mt: 2 }}>
            {rating}
          </Typography>
          <Typography
            align="center"
            variant="h6"
            sx={{ mt: 2, color: "white" }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Testimonials;
