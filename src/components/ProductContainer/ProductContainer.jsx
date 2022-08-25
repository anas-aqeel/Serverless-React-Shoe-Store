import React from "react";
import "./product-container.css";
import { Button, Grid, Rating, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductContainer = () => {
  return (
    <Grid
      columnGap={2}
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className="product-container"
    >
      <Grid item lg={5} md={12} sm={12} xs={12} className="product-image-grid">
        <div className="product-container-1">
          <img
            src={"/static/mock-images/products/product_2.jpg"}
            alt="AboutUsImage"
            className="product-container-1-img"
          />
        </div>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12} className="product-container-2">
        <div className="product-container-sub-heading">
          Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear
        </div>
        <div className="product-container-rating ">
          Sneaker{" "}
          <Rating
            sx={{ color: "goldenrod", ml: 2 }}
            size="small"
            name="simple-controlled"
            value={5}
            precision={0.5}
            onChange={(event, newValue) => { }}
          />
          <span style={{ color: "goldenrod", marginLeft: "5px" }}>(5.0)</span>
        </div>
        <div className="product-container-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
          debitis sit quaerat eius minima neque odio veritatis? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ducimus tenetur eum quos
          placeat itaque voluptatum minima! Lorem ipsum dolor debitis sit
          quaerat eius minima neque odio veritatis? sit amet consectetur
          adipisicing elit. Sed nisi asperiores pariatur
          <br />
          tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
          debitis sit quaerat eius minima neque odio veritatis? sit amet
          consectetur adipisicing elit. Sed nisi asperiores pariatur
        </div>
        <Typography variant="h6" sx={{ color: "white", my: 2 }}>
          $ 20.3
        </Typography>
        <div
          style={{
            display: "flex",
            margin: "5px 0",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Button
            sx={{ minWidth: "30px" }}
            variant="outlined"
            color="success"
            aria-label="delete"
            size="small"
          >
            <RemoveIcon />
          </Button>
          <Button
            disabled
            aria-label="delete"
            size="small"
            sx={{
              minWidth: "35px",
              mx: 1,
              border: "0.2px solid black",
              color: "white !important",
            }}
          >
            1
          </Button>
          <Button
            sx={{ minWidth: "30px" }}
            variant="outlined"
            color="error"
            aria-label="delete"
            size="small"
          >
            <AddIcon />
          </Button>
        </div>
        <Button
          className="product-container-btn"
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductContainer;
