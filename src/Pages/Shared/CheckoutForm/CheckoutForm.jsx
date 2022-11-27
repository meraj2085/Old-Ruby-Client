import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { item_price, buyer_name, buyer_email, _id, product_id } = booking;
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://oldruby-server.vercel.app/create-payment-intent", {
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
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
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
      setProcessing(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("CardInfo", card);
      const payment = {
        product_id,
        bookingId: _id,
        transactionId: paymentIntent.id,
      };
      fetch("https://oldruby-server.vercel.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("AccessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate("/dashboard/myOrders");
          console.log(data.updateResult);
          toast.success("Payment successful", { duration: 4000 });
        });
    }
    setProcessing(false);
    console.log("Payment", paymentIntent);
  };

  return (
    <div>
      <form
        className="border rounded max-w-lg border-gray-800 px-5 py-4"
        onSubmit={handleSubmit}
      >
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
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-sm text-white px-10 mt-4"
            disabled={!stripe || processing || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      <div>
        {cardError && (
          <p className="text-red-500 text-sm">{cardError}. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
