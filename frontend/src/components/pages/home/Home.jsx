import React from "react";
import "./Home.css";

import Map from "../../map/Map";

import ImageContainer from "../../outputImage/outputImage";

export default function Home() {
  return (
    <div className="home-page-body">
      <main id="home-page-body-main">
        <Map />
        <ImageContainer />
      </main>
    </div>
  );
}
