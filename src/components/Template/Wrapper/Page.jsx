import { forwardRef } from 'react';
import { Box } from '@mui/material';

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
      {meta}
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));


export default Page;