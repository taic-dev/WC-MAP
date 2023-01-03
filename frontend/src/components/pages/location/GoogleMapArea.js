import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

const GoogleMapArea = ({ currentLocation,children }) => {

  const mapStyles = {
    height: "100%",
    width: "100%",
  };
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={currentLocation}>
      { children }
    </GoogleMap>
  );
};

export default GoogleMapArea;
