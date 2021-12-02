const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { item } = req.body;

  const paymentIntent = await stripe.paymentIntents.retrieve(
    item
  );

  res.json({ 
    secret: paymentIntent.client_secret,
    status: paymentIntent.status,
    amount: paymentIntent.amount
  });
}

export default CreateStripeSession;
