// // with thanks https://github.com/LukeMwila/stripe-subscriptions-backend/blob/master/stripe-api/index.ts
// const process = require('process')

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// const respond = (fulfillmentText) => ({
//   statusCode: 200,
//   body: JSON.stringify(fulfillmentText),
//   headers: {
//     'Access-Control-Allow-Credentials': true,
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//   },
// })

// const handler = async function (event) {
//   let incoming
//   try {
//     incoming = JSON.parse(event.body)
//   } catch (error) {
//     console.error(`error with parsing function parameters:`, error)
//     return {
//       statusCode: 400,
//       body: JSON.stringify(error),
//     }
//   }
//   try {
//     const { email, productPlan, stripeToken } = incoming
//     const data = await createCustomerAndSubscribeToPlan(stripeToken, email, productPlan)
//     return respond(data)
//   } catch (error) {
//     return respond(error)
//   }
// }

const getAllProductDetails = async function () {
    // get all products
    const products = await stripe.products.list();
    // const response = await products.json();
    return products
  }
  
  // module.exports = { handler }
  
  require("dotenv").config();
  
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  
  // exports.handler = async function (event) {
   
  //   console.log(data);
  //   return true;
  // };
  
  
  exports.handler = async function() {
    const statusCode = 200;
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    const data = await getAllProductDetails();
    return  {
      statusCode,
      headers,
      body: JSON.stringify(data)
    };
  }
  