const stripe = require('stripe')('sk_test_51LaK8OH3X5K02oCg8jZABPrLE2XuX5BOSCZaQaiBIjj0Ud71yFfW81kps7cOXCaidOKeitqdvf4KyZB2r6pEFebL00nGYUKf3D');

exports.handler = async function (event) {
  
    let amount = JSON.parse(event.body).amount;
      const intent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        setup_future_usage: 'on_session',
      });
    const statusCode = 200;
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    
    const data = {client_secret: intent.client_secret};
    return {
      statusCode,
      headers,
      body: JSON.stringify(data),
    };
  };
  