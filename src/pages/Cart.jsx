import React, {useContext} from 'react'
import CartContainer from '../sections/CartContainer/CartContainer'
import { MY_CONTEXT } from '../context/GlobalContext'

const Cart = () => {
  let {state : {cart}} = useContext(MY_CONTEXT);
  return (

    <div style={{ minHeight: '60vh' }}>
      <CartContainer data={cart} />
    </div>
  )
}

export default Cart