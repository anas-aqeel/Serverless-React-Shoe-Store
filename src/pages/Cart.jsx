import React from 'react'
import CartContainer from '../sections/CartContainer/CartContainer'
import {products} from '../siteConfig'

const Cart = () => {
  return (
    <div style={{minHeight:'60vh'}}>
      <CartContainer bgimage={[...products.slice(0,5)]} count={0}/>
    </div>
  )
}

export default Cart