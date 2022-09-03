import React, { useContext } from "react";
import ProductContainer from "../components/ProductContainer/ProductContainer";
import { useLocation } from "react-router-dom";
import { MY_CONTEXT } from "../context/GlobalContext";
const Product = () => {
  let { contextValues: { products }} = useContext(MY_CONTEXT);
  const id = useLocation().pathname.split('/')[2];
  let product = products.find((e)=>e.id==id);
  return (
    <div className="site-container">
      <ProductContainer product={product}/>
    </div>
  );
};

export default Product;
