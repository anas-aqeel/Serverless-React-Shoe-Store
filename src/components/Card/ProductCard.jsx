import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../assets/images/home.png";
import featuredImage from "../../assets/images/abc.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./card.css";
import { CustomIconButton } from "../Buttons/MuiIconButtons";

export default function ProductCard() {
  return (
    <Card
      elevation={0}
      sx={{
        mx:1,
        padding: "1px",
        borderRadius: "10px",
        background: "linear-gradient(180deg, #7F249A 39.58%, #253DAB 100%)",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          paddingBottom: '10px',
          background: "linear-gradient(90deg, #13171C, #1D2328 )",
        }}
      >
        <CardMedia
          sx={{
            p: 3,
            borderRadius: '10px',
            maxWidth: "350px",
            background: "linear-gradient(149.79deg, #1C2A37 1%, #3E2018 100%)",
          }}
          component="img"
          alt="green iguana"
          image={image}
        />
        <CardContent sx={{ py: 0, px: 1, pt: 1 }}>
          <Typography
            gutterBottom
            variant="caption"
            sx={{ m: 0, color: "white" }}
            component="div"
          >
            ⭐ (4.5)
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{ mt: 0, color: "white" }}
            component="div"
          >
            Nike Air Jordan-100
          </Typography>
        </CardContent>
        <CardActions
          sx={{ py: 0, display: "flex", justifyContent: "space-between" }}
        >
          <Typography sx={{ color: "white" }} variant="body2">
            $20.00
          </Typography>
          <Button size="small" className="add_to_cart_btn">
            Add to Cart
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export function FeaturedProductCard({ className }) {
  return (
    <Card
      className={className}
      elevation={0}
      sx={{
        borderRadius: "10px",
        background: "transparent",
      }}
    >
      <div
        style={{
          padding: "3px 0",
          borderRadius: "10px",
          background: "transparent",
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div
          className="featured-product"
          style={{
            background: "linear-gradient(149.79deg, #1C2A37 1%, #3E2018 100%)",
            borderRadius: '10px 10px 0 0',
            display: 'flex',
            justifyContent: 'center',

          }}>
          <img src={featuredImage} className='featured-product' height={'auto'} alt="Featured" />
        </div>
        <CardActions
          className="featured-product"
          sx={{
            py: 0,
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            padding: '5px 8px',
            boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 75px 0px',
            background: "linear-gradient(95.15deg, #5298F2 0%, #FF6452 100%)",
            borderRadius: '0 0 10px 10px'
          }}
        >
          <div>
            <Typography
              className="featured-product-heading"
              sx={{ py: 1, color: "white", fontWeight: "bold" }}
              variant="h5"
            >
              The Products Series 71
            </Typography>
            <Typography
              sx={{ color: "#F06960", fontWeight: "bold" }}
              variant="h6"
            >
              <span
                style={{ textDecoration: "line-through", marginRight: "5px" }}
              >
                $50.20
              </span>
              <span style={{ color: "white", textDecoration: "none" }}>
                $20.00
              </span>
            </Typography>
          </div>
          <CustomIconButton>
            <ShoppingCartOutlinedIcon sx={{ color: "#94B7EF" }} />
          </CustomIconButton>
        </CardActions>
      </div>
    </Card>
  );
}
