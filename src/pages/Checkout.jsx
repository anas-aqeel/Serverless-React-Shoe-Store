import React, { useContext, useEffect } from "react";
import CheckoutSection from "../sections/Checkout/Checkout";
import "../index.css";
import { Elements } from "@stripe/react-stripe-js";
import { MY_CONTEXT } from "../context/GlobalContext";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "../components/StripeCheckout/StripeCheckout";
import { useState } from "react";
const stripePromise = loadStripe(
  "pk_test_51LaK8OH3X5K02oCgYrAQvQfuLRQsMy0Aq68BTm8TTfko47ExFgwYAYQoqyqkoGL5ZCGAg64uFREDDmbvtmliCytK00vQJ2wOeJ"
);

const Checkout = () => {
  let { fetchClientSecret } = useContext(MY_CONTEXT);
  let [clientSecret, setClientSecret] = useState();


  useEffect(() => {
    fetchClientSecret(3000).then(({ client_secret: _client_secret }) => {
    setClientSecret(_client_secret);
    });
  }, []);


  return (
    <>
      {clientSecret &&
        <Elements stripe={stripePromise} options={{clientSecret}}>
          
          <StripeCheckout />
        </Elements>
      }
    </>
  );
};

export default Checkout;
