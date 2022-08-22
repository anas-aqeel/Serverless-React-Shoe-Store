import { Button, Grid } from "@mui/material";
import React from "react";
import "./container.css";
import image from "../../assets/images/headerImg.png";

import arrow from "../../assets/images/arrow.png";

const Container = () => {
  return (
    <div className="container">
      <Grid className="container_grid" container spacing={1}>
        <Grid className="cols col-1" item lg={5} md={5} sm={8} xs={12}>
          <div className="content_wrapper">
            <div className="head_div">
              <h2 className="heading">
                Summer Collections <span>20222</span>
              </h2>
              <p className="tagline">Purchase unique shoes collection by us!</p>
            </div>
            <div>
              <Button className="shopnow_btn">
                <span>Shop Now</span>
              </Button>
              <img src={arrow} className='arrow'/>
            </div>
            <div className="rate_container">
              <div className="empty"></div>
              <div className="rating">
                <span> 4.9</span> | ⭐⭐⭐⭐⭐
                <p>120K Total Reviews</p>
                </div>
            </div>
          </div>
        </Grid>
        <Grid className="cols col_2" item lg={7} md={7} sm={12} xs={12}>
          <div className="image_div">
            <img className="image" src={image} alt="Demo" />
          </div>
          <div>
            <div></div>
            <div className="morph_box">
              <h6 className="off_heading">Get upto 30% off</h6>
              <p className="off_tagline">You can get upto 30 percent discount from here</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Container;
