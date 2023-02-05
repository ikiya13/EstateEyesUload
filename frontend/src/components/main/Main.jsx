import React, { useState, useEffect } from "react";
import Map from "../map/Map";
import Output from "../outputContainer/OutputContainer";
import "./Main.css";

const Main = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [imageSrc, setImageSrc] = useState("https://reactjs.org/logo-og.png");
  const [description, setDescription] = useState("");

  return (
    <div className="app-container">
      <Map selectedLocation={selectedLocation} />
      <Output
        selectedLocation={selectedLocation}
        imageSrc={imageSrc}
        description={description}
      />
    </div>
  );
};

export default Main;
