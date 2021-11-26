const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { item } = req.body;

  const redirectURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://capulet.vercel.app';

  const transformedItem = {
    price_data: {
      currency: 'mxn',
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: [
      'card',
      'oxxo',
    ],
    payment_method_options: {
      card: {
        installments: {
          enabled: true,
        },
      },
    },
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {
      images: item.image,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
