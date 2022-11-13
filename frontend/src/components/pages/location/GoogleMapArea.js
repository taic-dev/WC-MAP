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
    googleMapsApiKey: "AIzaSyD7Tvp_twEILZF9ia8LxblM4J02J1qGv3U",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={currentLocation}>
      { children }
    </GoogleMap>
  );
};

export default GoogleMapArea;
