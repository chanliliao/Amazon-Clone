const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HqV5VHXlknomZJBzrDvtpeoUYuDcCg49YDz0ns8JPazyrxIYKuui5b7EzZLsIPrb4Gf7p6HBDBa8V4Olyudc0Mz00TOmwmteJ'
);

//API

//App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (req, res) => res.status(200).send('hellow world'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
