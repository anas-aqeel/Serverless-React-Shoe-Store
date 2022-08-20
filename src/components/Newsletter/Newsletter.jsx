import { Grid } from "@mui/material";
import React from "react";
import "./news-letter.css";
const Newsletter = () => {
  return (
    <div className="news-letter-container">
      <Grid>
        <Grid item >
          <div className="testimonials-heading">
            Sign Up for <span>Updates</span> & Newsletter  
          </div>
        </Grid>
        <Grid item ></Grid>
      </Grid>
    </div>
  );
};

export default Newsletter;
