import React, { useState } from "react";
import "./App.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  LoadScript,
} from "@react-google-maps/api";
import { useEffect } from "react";

const App = () => {
  const [position, setPosition] = useState([]);

  useEffect(() => {
    // DBから登録した地図情報を取得
    const postiion = setPosition([
      {
        id: 1,
        base: {
          lat: 35.69731,
          lng: 139.7747,
        },
      },
      {
        id: 2,
        base: {
          lat: 35.69397,
          lng: 139.7762,
        },
      }
    ]);
  }, []);

  const mapStyles = {
    height: "100vh",
    width: "100vw",
  };
  const center = {
    lat: 35.69575,
    lng: 139.77521,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD7Tvp_twEILZF9ia8LxblM4J02J1qGv3U">
      <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={17}>
        {
          // setTimeout(()=>{
            position.map((value) => {
              console.log(33333)
              return <Marker position={value.base} key={value.id}/>;
            })
          // },4000)
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
