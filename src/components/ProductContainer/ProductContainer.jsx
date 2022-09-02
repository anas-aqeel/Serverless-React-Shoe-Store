import React, { useContext, useState } from "react";
import "./product-container.css";
import { MY_CONTEXT } from "../../context/GlobalContext";
import SocialLinks from "../SocialLinks/SocialLinks";

const ProductContainer = ({ product }) => {
  let { state: { cart } } = useContext(MY_CONTEXT);
  let { name, images, description, id } = product;
  let existingProduct = cart.find(({ id: _id }) => _id == id);
  let [quantity, setQuantity] = useState(existingProduct ? existingProduct.quantity : 1);
  let { dispatch } = useContext(MY_CONTEXT);
  let handleClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity, price: 43 },
    });
    setQuantity(++quantity);
  };
  let handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { ...product, quantity, price: 43 },
    });
    setQuantity(--quantity);
  };
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={images[0]} alt="shoe" />
            </div>
          </div>
          <div className="img-select">
            {images.map((e) => (
              <div className="img-item">
                <span className="link">
                  <img height={120} width={115} src={e} alt="shoe" />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product-content">
          <h2 className="product-title">{name}</h2>
          <span className="product-link">visit nike store</span>
          <div className="product-rating">
            <span>4.7(21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Old Price: <span>$257.00</span>
            </p>
            <p className="new-price">
              New Price: <span>$249.00 (5%)</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>{description}</p>
            <ul>
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>Shoes</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <input
              type="number"
              min="1"
              value={quantity - 1}
              onChange={({ target: { value } }) => setQuantity(value)}
              className="quantity"
            />
            <button
              type="button"
              onClick={handleClick}
              className="add_to_cart_btn_product"
            >
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            <button
              type="button"
              disabled={quantity <= 1}
              onClick={handleRemove}
              className={quantity <= 1 ? 'disabled-btn' : "add_to_cart_btn_product"}
            >
              Remove
            </button>
          </div>
          <div className="social-links">
            <p>Share At: </p>
            <SocialLinks
              gradient={"linear-gradient(90deg,  #13171a, #07080a )"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductContainer;
