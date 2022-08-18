import React from "react";
import "./product-details.css";
import image from "../../assets/images/home.png";
import { Button, Grid } from "@mui/material";
import { FeaturedProductCard } from "../Card/ProductCard";
const ProductDetails = () => {
  return (
    <div
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      className="featured-product-container"
    >
      <div className="featured-product-2">

        <div className="featured-product-heading">Product Details</div>
        <div className="featured-product-sub-heading">
          Get to Know Our Featured  <span>Product</span>.
        </div>
        <div className="featured-product-text">
          tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
          debitis sit quaerat eius minima neque odio veritatis?
          sit amet consectetur adipisicing elit. Sed nisi asperiores pariatur
        </div>
        <Button className="shopnow_btn featured-product-btn">Explore More</Button>
      </div>
      <div className="featured-product-grid">
        <div className="featured-product-1">
          <FeaturedProductCard />
        </div>
      </div>    
    </div>
  );
};

export default ProductDetails;
