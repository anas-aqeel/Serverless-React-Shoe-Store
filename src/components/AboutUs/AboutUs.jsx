import React from "react";
import "./about-us.css";
import image from "../../assets/images/home.png";
import { Button, Grid } from "@mui/material";
const AboutUs = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={0}
      className="about-us-container"
    >
      <Grid item lg={5} md={5} sm={12} xs={12} className="about-image-grid">
        <div className="about-us-1">
        <img src={image} alt="AboutUsImage" className="about-us-1-img" />
        </div>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} className="about-us-2">

        <div className="about-us-heading">About Us</div>
        <div className="about-us-sub-heading">
          We Provide High <span>Quality</span> Shoes.
        </div>
        <div className="about-us-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
          debitis sit quaerat eius minima neque odio veritatis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
          debitis sit quaerat eius minima neque odio veritatis?
          sit amet consectetur adipisicing elit. Sed nisi asperiores pariatur
          <br />
          tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
          debitis sit quaerat eius minima neque odio veritatis?
          sit amet consectetur adipisicing elit. Sed nisi asperiores pariatur

        </div>
        <Button className="shopnow_btn about-us-btn">Explore More</Button>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
