import React, { useContext } from "react";
import "./product-container.css";
import { Button, Grid, Rating, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { MY_CONTEXT } from "../../context/GlobalContext";
import { products } from '../../siteConfig'




// const ProductContainer = () => {
//   let { dispatch } = useContext(MY_CONTEXT);
//   let handleClick = () => {
//     dispatch({ type: 'ADD_TO_CART', payload: { ...products[0], quantity: 1 } })
//   }
//   let handleRemove = () => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: { ...products[0], quantity: 1 } })
//   }
//   return (
//     <Grid
//     columnGap={2}
//     container
//     direction="row"
//     alignItems="center"
//     justifyContent="space-between"
//     className="product-container"
//     >
//       <Grid item lg={5} md={12} sm={12} xs={12} className="product-image-grid">
//         <div className="product-container-1">
//           <img
//             src={"/static/mock-images/products/product_2.jpg"}
//             alt="AboutUsImage"
//             className="product-container-1-img"
//             />
//         </div>
//       </Grid>
//       <Grid item lg={6} md={12} sm={12} xs={12} className="product-container-2">
//         <div className="product-container-sub-heading">
//           Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear
//         </div>
//         <div className="product-container-rating ">
//           Sneaker{" "}
//           <Rating
//             sx={{ color: "goldenrod", ml: 2 }}
//             size="small"
//             name="simple-controlled"
//             value={5}
//             precision={0.5}
//             onChange={(event, newValue) => { }}
//             />
//           <span style={{ color: "goldenrod", marginLeft: "5px" }}>(5.0)</span>
//         </div>
//         <div className="product-container-text">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//           tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
//           debitis sit quaerat eius minima neque odio veritatis? Lorem ipsum
//           dolor sit amet consectetur adipisicing elit. Ducimus tenetur eum quos
//           placeat itaque voluptatum minima! Lorem ipsum dolor debitis sit
//           quaerat eius minima neque odio veritatis? sit amet consectetur
//           adipisicing elit. Sed nisi asperiores pariatur
//           <br />
//           tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
//           debitis sit quaerat eius minima neque odio veritatis? sit amet
//           consectetur adipisicing elit. Sed nisi asperiores pariatur
//         </div>
//         <Typography variant="h6" sx={{ color: "white", my: 2 }}>
//           $ 20.3
//         </Typography>
//         <div
//           style={{
//             display: "flex",
//             margin: "5px 0",
//             justifyContent: "flex-start",
//             alignItems: "center",
//           }}
//           >
//           <Button
//             sx={{ minWidth: "30px" }}
//             variant="outlined"
//             color="success"
//             aria-label="delete"
//             size="small"
//             onClick={handleRemove}
//             >
//             <RemoveIcon />
//           </Button>
//           <Button
//             disabled
//             aria-label="delete"
//             size="small"
//             sx={{
//               minWidth: "35px",
//               mx: 1,
//               border: "0.2px solid black",
//               color: "white !important",
//             }}
//             >
//             1
//           </Button>
//           <Button
//             sx={{ minWidth: "30px" }}
//             variant="outlined"
//             color="error"
//             aria-label="delete"
//             size="small"
//             onClick={handleClick}
//           >
//             <AddIcon />
//           </Button>
//         </div>
//         <Button
//           className="product-container-btn"
//           startIcon={<ShoppingCartOutlinedIcon />}
//           >
//           Add to Cart
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

const ProductContainer = () => {
  return (
    <div className="card-wrapper">
    <div className="card">
      <div className="product-imgs">
        <div className="img-display">
          <div className="img-showcase">
            <img src="/static/mock-images/products/product_1.jpg" alt="shoe image" />
            <img src="/static/mock-images/products/product_12.jpg" alt="shoe image" />
            <img src="/static/mock-images/products/product_3.jpg" alt="shoe image" />
            <img src="/static/mock-images/products/product_5.jpg" alt="shoe image" />
          </div>
        </div>
        <div className="img-select">
          <div className="img-item">
            <a href = "#" data-id = "1">
              <img src="/static/mock-images/products/product_1.jpg" alt="shoe image" />
            </a>
          </div>
          <div className="img-item">
            <a href = "#" data-id = "2">
              <img src="/static/mock-images/products/product_2.jpg" alt="shoe image" />
            </a>
          </div>
          <div className="img-item">
            <a href = "#" data-id = "3">
              <img src="/static/mock-images/products/product_3.jpg" alt="shoe image" />
            </a>
          </div>
          <div className="img-item">
            <a href = "#" data-id = "4">
              <img src="/static/mock-images/products/product_4.jpg" alt="shoe image" />
            </a>
          </div>
        </div>
      </div>
      <div className="product-content">
        <h2 className="product-title">nike shoes</h2>
        <a href = "#" className="product-link">visit nike store</a>
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span>4.7(21)</span>
        </div>

        <div className="product-price">
          <p className="last-price">Old Price: <span>$257.00</span></p>
          <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
        </div>

        <div className="product-detail">
          <h2>about this item: </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
          <ul>
            <li>Color: <span>Black</span></li>
            <li>Available: <span>in stock</span></li>
            <li>Category: <span>Shoes</span></li>
            <li>Shipping Area: <span>All over the world</span></li>
            <li>Shipping Fee: <span>Free</span></li>
          </ul>
        </div>

        <div className="purchase-info">
          <input type = "number" min = "0" value = "1" />
          <button type = "button" className="add_to_cart_btn">
            Add to Cart <i className="fas fa-shopping-cart"></i>
          </button>
          <button type = "button" className="add_to_cart_btn">Compare</button>
        </div>

        <div className="social-links">
          <p>Share At: </p>
          <a href = "#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href = "#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href = "#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href = "#">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href = "#">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  )
}
export default ProductContainer;
