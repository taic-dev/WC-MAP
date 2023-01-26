import { Marker } from "@react-google-maps/api";
import React from "react";

const CurrentLocationIcon = ({ currentLocation }) => {
  return (
    <Marker
      style={{ width: "17px" }}
      position={currentLocation}
      icon={{
        url: "https://maps.google.com/mapfiles/dir_0.png",
      }}
    />
  );
};

export default CurrentLocationIcon;
