import React, { useEffect, useState } from "react";
import "./styles.css";
const getRandomHexColor = () => {
  let result = "#";
  const character = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += character[Math.floor(Math.random() * 16)];
  }
  return result;
};
const getRandomRgbColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
const RandomColor = () => {
  const [typeOfColor, setTypeofColor] = useState("");
  const [color, setColor] = useState("");
  const handleHexColor = () => {
    const getColor = getRandomHexColor();
    setColor(getColor);
    setTypeofColor("hex");
  };
  const handleRgbColor = () => {
    const getRGBColor = getRandomRgbColor();
    setColor(getRGBColor);
    setTypeofColor("rgb");
  };
  const handleRandomColor = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      handleHexColor();
    } else {
      handleRgbColor();
    }
  };
  useEffect(() => {
    if (typeOfColor === "hex") handleHexColor();
    else handleRgbColor();
  }, [typeOfColor]);
  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={handleHexColor}>Create HEX color</button>
      <button onClick={handleRgbColor}>Create RGB color</button>
      <button onClick={handleRandomColor}>Generate Random color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
};

export default RandomColor;
