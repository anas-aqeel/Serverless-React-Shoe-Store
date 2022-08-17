import React from "react";
import "./about-us.css";
import image from "../../assets/images/home.png";
import { Button, Grid } from "@mui/material";
const AboutUs = () => {
  return (
    <Grid container className="about-us-container">
      <Grid item lg={4} md={5} sm={4} xs={11} className="about-us-1">
        {/* <div></div> */}
        {/* <div className="about-us-1-bg-box"></div> */}
        <img src={image} className="about-us-1-img" />
      </Grid>
      <Grid item lg={0.3} md={0.3} sm={1} xs={1}></Grid>
      <Grid item lg={7} md={6} sm={7} xs={12} className="about-us-2">
        <div className="about-us-heading">About Us</div>
        <div className="about-us-sub-heading">
          We Provide High <span>Quality</span> Shoes.
        </div>
        <div className="about-us-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
          debitis sit quaerat eius minima neque odio veritatis?
          <br /><br />
          sit amet consectetur adipisicing elit. Sed nisi asperiores pariatur
          
        </div>
        <Button className="shopnow_btn about-us-btn">Explore More</Button>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
