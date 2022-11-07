import React from "react";
import "./App.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  LoadScript,
} from "@react-google-maps/api";

const App = () => {

  const mapStyles = {
    height: "100vh",
    width: "100vw",
  };
  const center = {
    lat: 35.69575,
    lng: 139.77521,
  };
  
  const positionAkiba = {
    lat: 35.69731,
    lng: 139.7747,
  };
  
  const positionIwamotocho = {
    lat: 35.69397,
    lng: 139.7762,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD7Tvp_twEILZF9ia8LxblM4J02J1qGv3U">
      <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={17}>
        <Marker position={positionAkiba} />
        <Marker position={positionIwamotocho} />
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
