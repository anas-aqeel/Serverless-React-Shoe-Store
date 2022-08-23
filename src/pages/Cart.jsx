import React from 'react'
import Carts from '../sections/Cart/Cart'
import products from './../components/Template/Utils/Products'

const Cart = () => {
  return (
    <div style={{height:'60vh'}}>
      <Carts bgimage={[...products.slice(0,3)]} count={34}/>
    </div>
  )
}

export default Cart