import React, { useState, useRef, useEffect } from "react";
import Main from "./components/main/Main";
import userdata from "./components/map/Map";
import "./App.css";

var img = document.createElement("img");
img.src = "https://picsum.photos/200/300";
var src = document.getElementById("x");

function App() {
  return (
    <div>
      <Main></Main>
    </div>
  );
}

export default App;
