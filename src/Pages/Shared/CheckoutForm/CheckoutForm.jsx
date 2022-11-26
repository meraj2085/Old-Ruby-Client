import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ booking }) => {
  console.log(booking);
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcession] = useState(false);
  const { item_price, buyer_name, buyer_email, _id, product_id } = booking;
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("OldRuby-Token")}`,
      },
      body: JSON.stringify({ item_price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [item_price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setSuccess("");
    setProcession(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyer_name,
            email: buyer_email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      setProcession(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("CardInfo", card);
      const payment = {
        product_id,
        bookingId: _id,
        transactionId: paymentIntent.id,
      };
      fetch("http://localhost:5000/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("AccessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    setProcession(false);
    console.log("Payment", paymentIntent);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm text-white px-10 mt-4"
          disabled={!stripe || processing || !clientSecret}
        >
          Pay
        </button>
      </form>
      <div>
        {cardError && (
          <p className="text-red-500 text-sm">{cardError}. Please try again.</p>
        )}
        {success && (
          <div>
            <p className="text-green-500 text-lg">{success}</p>{" "}
            <p className="text-sm">
              Your transactionId: <span> {transactionId}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
