import { Button } from "@mui/material";
import React from "react";
import "./cart-container.css";

export const CartContainer = ({ bgimage, count }) => {
  return (
    <div className="cart-card">
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <h3>Cart</h3>
        <h3>{bgimage.length} items</h3>
      </div>
      <hr />
      <div>
        {bgimage.length > 0 ? (
          <div className="ctcheck">
            {bgimage.map(({ image, id }) => (

              <div className="ctinfo-flex" key={id}>
                <img src={image} key={id} alt="bg-img" />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125 x {count} <span>${125 * count}</span>
                  </p>
                </div>
              </div>
            ))}
            <Button className="cart-checkout-btn"> Checkout</Button>
          </div>
        ) : (
          <p className="p-empty">Your cart is empty</p>
        )}
      </div>
    </div>
  )
}
export default CartContainer;
