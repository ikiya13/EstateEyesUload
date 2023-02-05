import React from "react";
import "./outputImage.css";

const Image = ({ imageSrc }) => {
  return (
    <div className="image-container">
      <h3>Image component</h3>
      <img src={imageSrc} alt="House" />
    </div>
  );
};

export default Image;
