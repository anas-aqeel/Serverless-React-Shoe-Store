import { Grid } from "@mui/material";
import React from "react";
import "./footer.css";
import { NavConfig } from "../../siteConfig";
import { Logo } from "../Navbar/Navbar";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-seperator" />
      <Grid
        container
        rowGap={8}
        className="footer-wrapper"
      >
        <Grid
          className="footer-column footer-col-1"
          item
          lg={4}
          md={4}
          sm={6}
          xs={6}
        >
          <div className="footer-col-content-wrapper">
            <Logo text={NavConfig.logo} />
            <div className="footer-col-text footer-tagline">
              Lorem ipsum, dolor sit amet consectetur adipisicing. Dolor sit
              amet consectetur adipisicing
            </div>
            <SocialLinks  gradient={'linear-gradient(99.25deg, #6193E3 9.55%, #F96758 96.08%)'}/>
          </div>
        </Grid>
        <Grid
          className="footer-column footer-col-2"
          item
          lg={2}
          md={2}
          sm={6}
          xs={6}
        >
          <div className="footer-col-content-wrapper">
            <div className="footer-col-head">Find Product</div>
            <div className="footer-col-text">Bronze Amold</div>
            <div className="footer-col-text">Choronograph blue</div>
            <div className="footer-col-text">Smart Phones</div>
            <div className="footer-col-text">Automatic Watch</div>
            <div className="footer-col-text">Hair straightener</div>
          </div>
        </Grid>
        <Grid
          className="footer-column footer-col-3"
          item
          lg={2}
          md={2}
          sm={6}
          xs={6}
        >
          <div className="footer-col-content-wrapper">
            <div className="footer-col-head">Find Product</div>
            <div className="footer-col-text">Bronze Amold</div>
            <div className="footer-col-text">Choronograph blue</div>
            <div className="footer-col-text">Smart Phones</div>
            <div className="footer-col-text">Automatic Watch</div>
            <div className="footer-col-text">Hair straightener</div>
          </div>
        </Grid>
        <Grid
          className="footer-column footer-col-4"
          item
          lg={2}
          md={2}
          sm={3}
          xs={6}
        >
          <div className="footer-col-content-wrapper">
            <div className="footer-col-head">Find Product</div>
            <div className="footer-col-text">Bronze Amold</div>
            <div className="footer-col-text">Choronograph blue</div>
            <div className="footer-col-text">Smart Phones</div>
            <div className="footer-col-text">Automatic Watch</div>
            <div className="footer-col-text">Hair straightener</div>
          </div>
        </Grid>
      </Grid>
      <hr className="footer-seperator" />
      <div className="footer-wrapper footer">
        <p className="footer-text">@Copyright All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
