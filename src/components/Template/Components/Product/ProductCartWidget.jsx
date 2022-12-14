import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import Iconify from '../../Iconify';
import { MuiRouteLink } from '../../../Buttons/MuiIconButtons'
import { useContext } from 'react';
import { MY_CONTEXT } from '../../../../context/GlobalContext';


const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 }
}));


export default function CartWidget() {
  let { state: { cart } } = useContext(MY_CONTEXT)
  return (
    <MuiRouteLink route={'/cart'}>
      <RootStyle>
        <Badge showZero badgeContent={cart.length} color="error" max={99}>
          <Iconify icon="eva:shopping-cart-fill" width={24} height={24} />
        </Badge>
      </RootStyle>

    </MuiRouteLink>
  );
}