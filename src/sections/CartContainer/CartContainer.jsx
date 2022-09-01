import { Button } from "@mui/material";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import { MuiRouteLink } from "../../components/Buttons/MuiIconButtons";
import "./cart-container.css";

export const CartContainer = ({ data }) => {
  return (
    <div className="cart-card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Cart</h3>
        <h3>{data.length} items</h3>
      </div>
      <hr />
      <div>
        {data.length > 0 ? (
          <div className="ctcheck">
            {data?.map((product) => {
              console.log(product)
               return (
              <div className="ctinfo-flex" key={product.id}>
                <img src={product.images[0]} key={product.id} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <p>
                    ${product.price} x {product.quantity} <span>${product.price * product.quantity}</span>
                  </p>
                </div>
              </div>
            )})}
            <MuiRouteLink route={'/products'} color='white'>
              <Button className="continue-btn" startIcon={<WestIcon />}>
                Continue Shopping
              </Button>
            </MuiRouteLink>
            <hr />
            <MuiRouteLink
              style={{ width: "100%" }}
              route={"/checkout"}
              color="white"
            >
              <Button fullWidth className="cart-checkout-btn">
                Checkout
              </Button>
            </MuiRouteLink>
          </div>
        ) : (
          <>
            <p className="p-empty">Your cart is empty</p>
            <hr />

            <MuiRouteLink route={'/products'} color='white'>
              <Button className="continue-btn" startIcon={<WestIcon />}>
                Continue Shopping
              </Button>
            </MuiRouteLink>
          </>

        )}
      </div>
    </div>
  );
};
export default CartContainer;
