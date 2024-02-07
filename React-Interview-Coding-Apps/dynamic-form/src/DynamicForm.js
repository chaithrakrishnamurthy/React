import React, { useState } from "react";

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    cardName: "",
    expiryDate: "",
    paypalEmail: "",
  });

  return (
  <form>
    <label htmlFor="payment">Select Payment Method</label>
    <select id="paymentMethod" name="paymentMethod" value={} onChange={}>
        <option value="creditCard">Credit Card</option>
        <option value="payPal">PayPal</option>
    </select>
  </form>
  );
};

export default DynamicForm;
