require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getAllProductDetails = async function () {
  // get all products
  const products = await stripe.products.list();
  return products;
};

exports.handler = async function () {
  const statusCode = 200;
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  const data = await getAllProductDetails();
  return {
    statusCode,
    headers,
    body: JSON.stringify(data),
  };
};
