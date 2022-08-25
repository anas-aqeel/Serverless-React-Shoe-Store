import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';
import { MuiRouteLink } from '../../../Buttons/MuiIconButtons'

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <MuiRouteLink route='/product/i2'>
            <ShopProductCard product={product} />
          </MuiRouteLink>
        </Grid>
      ))}
    </Grid>
  );
}