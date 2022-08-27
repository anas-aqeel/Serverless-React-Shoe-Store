import React, { useContext } from "react";
import { CustomIconButton } from "../../components/Buttons/MuiIconButtons";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ProductCard from "../../components/Card/ProductCard";
import { Grid } from "@mui/material";
import "./popular-products.css";
import { MY_CONTEXT } from "../../context/GlobalContext";
const PopularProducts = () => {
  let { state: { popularProducts } } = useContext(MY_CONTEXT);
  return (
    <div className="main">
      <div className="popular-products-head">
        <div className="popular-products-heading">
          Popular <span>Products</span>
        </div>
        <div>
          <CustomIconButton
            style={{ outline: "1px solid #9b9999", background: "transaprent" }}
            className="popular-products-arrows"
          >
            <WestIcon style={{ color: "#9b9999" }} />
          </CustomIconButton>
          <CustomIconButton
            style={{
              background:
                "linear-gradient(99.25deg, #6193E3 9.55%, #F96758 96.08%)",
            }}
            className="popular-products-arrows"
          >
            <EastIcon style={{ color: "#f1dfdf" }} />
          </CustomIconButton>
        </div>
      </div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        {popularProducts.map((e) => {
          return (
            <Grid item lg={3} md={4} sm={6}>
              <ProductCard data={e} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PopularProducts;
