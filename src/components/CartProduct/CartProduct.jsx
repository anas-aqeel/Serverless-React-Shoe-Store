import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { PopularProductsList } from "../../siteConfig";
import { Button, IconButton } from "@mui/material";

let { image, name } = PopularProductsList[0];
export default function CartProduct() {
  return (
    <Card
      elevation={0}
      sx={{
        mx: 1,
        padding: "1px",
        borderRadius: "5px",
        background: "linear-gradient(180deg, #7F249A 39.58%, #253DAB 100%)",
        width: '255px',
        height: '500px'
      }}

    >
      <div
        style={{
          borderRadius: "5px",
          background: "linear-gradient(90deg, #13171C, #1D2328 )",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div>
          <CardMedia
            sx={{
              borderRadius: "5px 0 0 5px",
              width: '100%',
              background:
                "linear-gradient(149.79deg, #1C2A37 1%, #3E2018 100%)",
            }}
            style={{
              padding: "4px 0 !important",
            }}
            component="img"
            alt="green iguana"
            image={image}
          />
          <div
            style={{
              padding: "5px",
              paddingLeft: "6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography
              gutterBottom
              variant="subtitle1"
              sx={{ mt: 0, color: "white" }}
              component="div"
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              sx={{ m: 0, color: "white" }}
              component="div"
            >
              Sneaker
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ mt: 1, color: "white" }}
              component="div"
            >
              $20.2
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            margin: "10px 0",

            paddingLeft: "6px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{ minWidth: "30px" }}
            variant="outlined"
            color="error"
            aria-label="delete"
            size="small"
          >
            <AddIcon />
          </Button>
          <Button
            // variant="outlined"
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
            color="success"
            aria-label="delete"
            size="small"
          >
            <RemoveIcon />
          </Button>
        </div>
        <div
          style={{
            paddingLeft: "6px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width:'100%'
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            sx={{ mt: 0, color: "white" }}
            component="div"
          >
            $40.4
          </Typography>
          <IconButton sx={{ mb: 1 }} color="error" variant="outlined">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
