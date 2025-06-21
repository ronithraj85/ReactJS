import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <div>
      Order Summary
      <br />
      <button onClick={() => navigate("/")}>Return to Home page</button>
    </div>
  );
}

export default OrderSummary;
