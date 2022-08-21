import { Button } from "@mui/material";
import React from "react";
import "./news-letter.css";

const Newsletter = () => {
  return (
    <div className="news-letter-container">
      <div className="newsletter-flex-container">
        <div className="newsletter-heading-div">
          <div className="newsletter-heading">
            Sign Up for <span>Updates</span> & Newsletter
          </div>
        </div>
        <div>
          <div className="newsletter-input-section">
            <input
              placeholder="Type your Email"
              className="newsletter-input"
              type="email"
            />
            <Button sx={{ color: "white" }} className="newsletter-btn">
              Subscribe<span className="none">-</span>Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
