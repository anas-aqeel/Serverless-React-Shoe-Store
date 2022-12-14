import { Box, Card, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fCurrency } from "../../Utils/formatNumber";
import Label from "../../Components/Label";
import ColorPreview from "../../Colors/ColorPreview";

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});



export default function ShopProductCard({ product }) {
  
  const { name, images } = product;
  let status = 'new';
  return (
    <Card
      sx={{
        
        cursor: 'pointer',
        background: "#1D2328"
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>
        {status && (
          <Label
            variant="filled"
            color={(status === "sale" && "error") || "info"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={images[0]} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        {/* <Link to="#" color="inherit" underline="hover" component={RouterLink}> */}
        <Typography sx={{ color: "#D1D1D1" }} variant="subtitle2" noWrap>
          {name}
        </Typography>
        {/* </Link> */}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
         
          <ColorPreview colors={['red','red']} />
          <Typography sx={{ color: "#D1D1D1" }} variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: "#ACACAC",
                textDecoration: "line-through",
              }}
            >
              150$
            </Typography>
            &nbsp;
            
              120$
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
