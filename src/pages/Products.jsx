import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Page from "../components/Template/Wrapper/Page";
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar,
} from "../components/Template/Components/Product/Products";




export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  return (
    <Page className='products' title="Dashboard: Products">
      <Box sx={{ mb: 5, px: 0 }}>
        <Typography variant="h4" sx={{ my: 4, color: 'white' }}>
          Products
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList />
        <ProductCartWidget />
      </Box>
    </Page>
  );
}
