import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import SmallSpinner from "../../components/Spinner/SmallSpinner";

const CheckoutForm = ({
  paymentProduct,
  success,
  setSuccess,
  transactionId,
  setTransactionId,
}) => {
  const { _id, productName } = paymentProduct;
  const { user } = useContext(AuthContext);
  const { productPrice } = paymentProduct;
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetch(
      "https://swap-deal-server-pblnsdizd-sakib-xrz.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [productPrice]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
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
      console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      setError(confirmError.message);
      setProcessing(false);
    }
    if (paymentIntent.status === "succeeded") {
      // store payment info in the database
      const payment = {
        transactionId: paymentIntent.id,
        email: user?.email,
        name: user?.name,
        bookingId: _id,
        productName,
      };
      fetch(
        "https://swap-deal-server-pblnsdizd-sakib-xrz.vercel.app/payments",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("swap-token")}`,
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            form.reset();
            setSuccess("Congrats! Your payment completed");
            setTransactionId(paymentIntent.id);
          }
        });
      setProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <form className="form-control" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                marginTop: "3rem",
                height: "100vh",
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
        <p className="text-red-500">{error}</p>
        <button
          type="submit"
          className="btn btn-md w-1/2 mx-auto btn-primary px-5 mt-5 text-white"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? <SmallSpinner></SmallSpinner> : `Pay Now`}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
