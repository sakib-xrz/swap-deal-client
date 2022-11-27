import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51M8hGnEMwpOnQHU8Rdqq1KjsaTqQei62rsNK16VSwJV9NAs720Ww3elG8bzAeEGZjrYOM9SScPmp15BovS41sjyj001nulCctw"
);

const Payment = () => {
  const paymentProduct = useLoaderData();
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { productName, productPrice } = paymentProduct;
  if (success) {
    return (
      <div className="p-10 flex justify-center">
        <div className="bg-white p-24 rounded-md shadow-lg">
          <h2 className="text-3xl text-center font-bold text-green-500">
            {success}
          </h2>
          <h2 className="text-md text-center mt-3">
            Your transaction id <br /> <strong>{transactionId}</strong>
          </h2>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="p-10">
        <div className="mb-10">
          <h1 className="text-center font-bold text-2xl uppercase">
            Secure payment info
          </h1>
        </div>
        <h3 className="font-medium text-center text-xl uppercase">
          Please pay <strong>BDT {productPrice}</strong> for your {productName}
        </h3>
        <div className="mb-3 w-8/12 mx-auto flex my-10">
          <div className="px-2 w-full flex justify-center">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="type"
                id="type1"
                checked
              />
              <img
                alt=""
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="h-8 ml-3"
              />
            </label>
          </div>
        </div>
        <div className="w-8/12 mx-auto ">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              paymentProduct={paymentProduct}
              success={success}
              setSuccess={setSuccess}
              transactionId={transactionId}
              setTransactionId={setTransactionId}
            />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
