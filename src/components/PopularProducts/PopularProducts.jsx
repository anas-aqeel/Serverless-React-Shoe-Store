import React from "react";
import { CustomIconButton } from "../Buttons/MuiIconButtons";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ProductCard from "../Card/ProductCard";
import "./popular-products.css";

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
      <div className="popular-products-body">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};

export default PopularProducts;
