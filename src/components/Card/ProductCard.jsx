import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../assets/images/home.png";
import "./card.css";

export default function ProductCard() {
  return (
    <Card
      elevation={0}
      sx={{
        mb: 2,
        padding: "1px",
        borderRadius: "10px",
        background: "linear-gradient(180deg, #7F249A 39.58%, #253DAB 100%)",
      }}
    >
      <div
        style={{
          padding: "3px 0",
          borderRadius: "10px",
          background: "linear-gradient(90deg, #13171C, #1D2328 )",
        }}
      >
        <CardMedia
          sx={{
            p: 3,
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
