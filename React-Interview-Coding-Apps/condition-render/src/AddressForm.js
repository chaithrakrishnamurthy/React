import React, { useState } from "react";

const AddressForm = () => {
  const [inputValue, setinputValue] = useState("");
  const handleRadioInput = (e) => {
    setinputValue(e.target.value);
  };
  return (
    <form>
      <div>
        <input
          type="radio"
          id="homeDelivery"
          name="inputValue"
          value="homeDelivery"
          checked={inputValue === "homeDelivery"}
          onChange={handleRadioInput}
        />
        <label htmlFor="homeDelivery">Home Delivery</label>
      </div>
      <div>
        <input
          type="radio"
          id="storePickup"
          name="inputValue"
          value="storePickup"
          checked={inputValue === "storePickup"}
          onChange={handleRadioInput}
        />
        <label htmlFor="storePickup">Store Pick-up</label>
      </div>
      {inputValue === "homeDelivery" && (
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
        </div>
      )}
      {inputValue === "storePickup" && (
        <div>
          <label htmlFor="storePickup">Pickup Location:</label>
          <input type="text" id="storePickup" name="storePickup" />
        </div>
      )}
    </form>
  );
};

export default AddressForm;
