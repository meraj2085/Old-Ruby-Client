import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Shared/CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = () => {
  const booking = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-4 mb-2 mx-5">Payment</h1>
      <p className="mx-5 text-lg">
        Pay ${booking?.item_price} for {booking?.item_name}
      </p>
      <div className=" mx-5 my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
