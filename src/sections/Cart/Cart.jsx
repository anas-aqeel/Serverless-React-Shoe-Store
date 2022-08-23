import { Grid } from "@mui/material";
import React from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import "./cart.css";
const CartSec = () => {
  return (
    <div className="cart">
      <Grid container>
        <Grid item lg={9} md={8} sm={12} sx={12} className='cart-col-1'>
          <div className='cart-col-1-head'>
            <div>Shopping Cart</div>
            <div>3 Items</div>
          </div>
          <hr className="cart-seperator" />
          <div className='cart-products-container'>
            <div className="cart-th">
              <div className="cart-product-col-1">Product Details</div>
              <div className="cart-product-cols">Price</div>
              <div className="cart-product-cols">Quantity</div>
              <div className="cart-product-cols">Total</div>
            </div>
            <div className="cart-products-div">
              <div class="box">
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
              </div>
            </div>
          </div>
          <div className=''></div>
        </Grid>
        <Grid item lg={3} md={4} sm={12} sx={12} className=''>
          checkout
        </Grid>
      </Grid>
    </div>
  );
};


export const Carts = ({ bgimage, count }) => {
  return (
    <div className="cart-card">
      <h3>Cart</h3>
      <hr />
      <div>
        {count > 0 ? (
          <div className="ctcheck">
            {bgimage.map(({ image, id }) => (

              <div className="ctinfo-flex">
                <img src={image} key={id} alt="bg-img" />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125 x {count} <span>${125 * count}</span>
                  </p>
                </div>
              </div>
            ))}
            <button> Checkout</button>
          </div>
        ) : (
          <p className="p-empty">Your cart is empty</p>
        )}
      </div>
    </div>
  )
}
export default Carts;
