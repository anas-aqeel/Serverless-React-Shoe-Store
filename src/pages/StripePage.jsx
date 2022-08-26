import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51LaK8OH3X5K02oCgYrAQvQfuLRQsMy0Aq68BTm8TTfko47ExFgwYAYQoqyqkoGL5ZCGAg64uFREDDmbvtmliCytK00vQJ2wOeJ"
);

const StripePage = () => {
    console.log(loadStripe)
    stripePromise.then((e) => {
        console.log(e);
    });
    const options = {
        // passing the client secret obtained from the server
        clientSecret: "{{CLIENT_SECRET}}",
    };
    var response = fetch("/secret", { mode: 'no-cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            var clientSecret = responseJson.client_secret;
            console.log(clientSecret);
        });
    return (
        <>
            <Elements stripe={stripePromise}>
                <div>hello</div>
            </Elements>
        </>
    );
};

export default StripePage;
