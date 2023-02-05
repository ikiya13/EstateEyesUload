import React, { useState, useEffect } from "react";
import "./Map.css";
//import window.google from "google"
let map;
let marker;
let geocoder;
let responseDiv;
let response;
let userdata=0;
let longlatreturn;

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadMap = () => {
      const myLatLng = { lat: 37.7749, lng: -122.4194 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: myLatLng, //lat: 37.7749, lng: -122.4194
        zoom: 6,
      });

      setMap(map);
      geocoder = new window.google.maps.Geocoder();

      response = document.createElement("pre");
      response.id = "response";
      response.innerText = "";
      responseDiv = document.createElement("div");
      responseDiv.id = "response-container";
      responseDiv.appendChild(response);

      const clearButton = document.createElement("input");

      clearButton.type = "button";
      clearButton.value = "Clear";
      clearButton.classList.add("button", "button-secondary");
      clearButton.style.width = "120px";
      clearButton.style.height = "50px";

      const instructionsElement = document.createElement("p");

      instructionsElement.id = "instructions";
      instructionsElement.innerHTML =
        "<strong>Instructions</strong>: Click on the map to display information."; //Enter an address in the textbox to geocode or c
      //map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputText);
      //map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(submitButton);
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(
        clearButton
      );
      map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(
        instructionsElement
      );
      map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(
        responseDiv
      );
      marker = new window.google.maps.Marker({
        map,
        position: myLatLng
      });
      //new window.google.maps.Marker(options);
      map.addListener("click", (e) => {
        geocode({ location: e.latLng });
      });
      clearButton.addEventListener("click", () => {
        clear();
      });
      clear();

      /*
      new window.google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
      });
      */
      //mapwrap
      //window.google.maps.event.trigger(map,"resize")
      clear();
    };

    function geocode(request) {
      clear(); //CHECK THIS
      geocoder
        .geocode(request)
        .then((result) => {
          const { results } = result;

          map.setCenter(results[0].geometry.location);
          marker.setPosition(results[0].geometry.location);
          marker.setMap(map);
          responseDiv.style.display = "block";
          responseDiv.style.fontSize = "8px";
          //responseDiv.style.height = "10px"; //ERROR PRONE
          response.innerText = JSON.stringify(result, null, 1);
          userdata=JSON.parse(response.textContent).results[0].geometry.location
          console.log(JSON.parse(response.textContent).results[0].geometry);
          longlatreturn=[userdata.lat, userdata.lng]
          console.log(longlatreturn)
          //document.write(JSON.stringify(result));
          //document.write(response.location)
          return results;
        })
        .catch((e) => {
          alert("Geocode was not successful for the following reason: " + e);
        });
    }

    function clear() {
      marker.setMap(null);
      responseDiv.style.display = "none";
    }

    /*
    const marker = new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
    });
    */

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCveccn49010_n_4ASbhUjg6ADLYgqQVHQ`;
      document.head.appendChild(script);
      script.addEventListener("load", loadMap);
    } else {
      loadMap();
    }

    return () => {
      // Clean up the map instance when the component unmounts
      setMap(null);
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
};

export default Map;

/*
import React, { useState, useEffect } from "react";
import "./Map.css";

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8,
      });
      setMap(map);
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCveccn49010_n_4ASbhUjg6ADLYgqQVHQ`;
      document.head.appendChild(script);
      script.addEventListener("load", loadMap);
    } else {
      loadMap();
    }

    return () => {
      // Clean up the map instance when the component unmounts
      setMap(null);
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
};

export default Map;
*/