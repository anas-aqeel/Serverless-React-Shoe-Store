import React, { useContext, useEffect } from "react";
import { MY_CONTEXT } from "../context/GlobalContext";
import { useState } from "react";
import "../index.css";
import LoadingPage from "../components/Loader/LoadingPage";



const Checkout = () => {
  let { state: { cart }, fetchClientSecret } = useContext(MY_CONTEXT);
  let formatProducts = () => {
    return cart.map(({ default_price, quantity }) => {
      return { price: default_price, quantity }
    });
  };

  let [url, setUrl] = useState('');

  useEffect(() => {
    fetchClientSecret(formatProducts()).then(({
      url }) => {
      window.location.href = url
      setUrl(url);
    });
  }, []);


  return (
    <>

      {!url && <LoadingPage />}
    </>
  );
};

export default Checkout;
