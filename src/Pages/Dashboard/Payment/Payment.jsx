import React from "react";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    
  const navigate = useNavigate();
  const handlePaymentChange = (e) => {
    const SelectedMethod = e.target.value;
    if (SelectedMethod) {
      navigate(SelectedMethod);
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please Pay First"}
      ></SectionTitle>
      <div>
        <select
          className="select select-info w-full max-w-xs mb-10"
          onChange={handlePaymentChange}
          defaultValue=""
        >
          <option disabled selected value="">
            Select Payment Method
          </option>
          <option value="/dashboard/payment">Stripe</option>
          <option value="/dashboard/sslPayment">SSLCOMMERZ</option>
        </select>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
