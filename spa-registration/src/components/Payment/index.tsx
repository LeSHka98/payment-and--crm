// libraries
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// components
import CheckoutForm from 'components/Payment/CheckoutForm';
// constants
import { PUBLISHABLE_KEY } from 'constants/stripe';

const stripePromise = loadStripe(PUBLISHABLE_KEY);

const Stripe = () => (
  <Elements stripe={stripePromise}>
    <h1>Payment Form</h1>
    <CheckoutForm />
  </Elements>

);

export default Stripe;
