import React from "react";
import { CustomIconButton } from "../Buttons/MuiIconButtons";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ProductCard from "../Card/ProductCard";
import "./popular-products.css";
import { Grid } from "@mui/material";

const PopularProducts = () => {
  return (
    <div className="main">
      <div className="popular-products-head">
        <div className="popular-products-heading">
          Popular <span>Products</span>
        </div>
        <div>
          <CustomIconButton
            style={{ outline: "1px solid #9b9999", background: "transaprent" }}
          >
            <WestIcon style={{ color: "#9b9999" }} />
          </CustomIconButton>
          <CustomIconButton
            style={{
              background:
                "linear-gradient(99.25deg, #6193E3 9.55%, #F96758 96.08%)",
            }}
          >
            <EastIcon style={{ color: "#f1dfdf" }} />
          </CustomIconButton>
        </div>
      </div>
      <Grid container spacing={1} className="popular-products-body">
        <Grid className="grid-item" item lg={2.4} md={3} sm={4} xm={6}>
          <ProductCard />
        </Grid>
        <Grid className="grid-item" item lg={2.4} md={3} sm={4} xm={6}>
          <ProductCard />
        </Grid>
        <Grid className="grid-item" item lg={2.4} md={3} sm={4} xm={6}>
          <ProductCard />
        </Grid>
        <Grid className="grid-item" item lg={2.4} md={3} sm={4} xm={6}>
          <ProductCard />
        </Grid>
        <Grid className="grid-item" item lg={2.4} md={3} sm={4} xm={6}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default PopularProducts;
