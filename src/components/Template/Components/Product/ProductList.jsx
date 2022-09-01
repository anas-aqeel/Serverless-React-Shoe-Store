import { Grid } from "@mui/material";
import ShopProductCard from "./ProductCard";
import { MuiRouteLink } from "../../../Buttons/MuiIconButtons";
import { MY_CONTEXT } from "../../../../context/GlobalContext";
import { useContext } from "react";

export default function ProductList() {
  let {
    state: { products },
  } = useContext(MY_CONTEXT);
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <MuiRouteLink route={'/product/' + product.id}>
            <ShopProductCard product={product} />
          </MuiRouteLink>
        </Grid>
      ))}
    </Grid>
  );
}
