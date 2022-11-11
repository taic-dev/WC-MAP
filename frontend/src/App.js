import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
} from "@mui/material";

import getCurrentLocation from "./components/templates/getCurrentLocation.js";

import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import currentLocationIcon from "./logo.svg";

const App = () => {
  const [resData, setResData] = useState(null);
  const [value, setValue] = useState(0);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 35.681236,
    lng: 139.767125,
  });

  const [activeMarker, setActiveMarker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try{
        setIsLoading(true);
        let coordinate = await getCurrentLocation();
        console.log(coordinate);
        setCurrentLocation(coordinate);
      }catch(e){
        console.log(e);
      } 
    })();
    setIsLoading(false);
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD7Tvp_twEILZF9ia8LxblM4J02J1qGv3U",
  });

  if (!isLoaded) return <div>Loading...</div>;

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  // 現在地の取得
  // const getCurrentLocation = () => {
  //
  // };

  const handleActiveMarker = (id) => {
    setActiveMarker(id);
  };

  const getMarkerInfo = [
    {
      id: 1,
      name: "トイレ1",
      location: {
        lat: 35.69731,
        lng: 139.7747,
      },
    },
    {
      id: 2,
      name: "トイレ2",
      location: {
        lat: 35.69575,
        lng: 139.77521,
      },
    },
    {
      id: 3,
      name: "トイレ3",
      location: {
        lat: 33.8315492,
        lng: 132.754934,
      },
    },
  ];

  const GoogleMapURL = "https://www.google.co.jp/maps?q=";

  console.log(isLoading)


  return (
    <>
    {!isLoading ?  (
      <main className="main">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={currentLocation}
        >
          {/* 現在地のマーカー */}
          <Marker
            style={{ width: "17px" }}
            position={currentLocation}
            icon={{
              url: "https://maps.google.com/mapfiles/dir_0.png",
            }}
          />

          {/* マーカーと吹き出しの表示 */}
          {getMarkerInfo.map((getMarker) => (
            <>
              <Marker
                key={getMarker.id}
                position={getMarker.location}
                onClick={() => handleActiveMarker(getMarker.id)}
              />

              {activeMarker === getMarker.id ? (
                <InfoWindow
                  position={getMarker.location}
                  onCloseClick={() => setActiveMarker(false)}
                >
                  <div>
                    <h1>{getMarker.name}</h1>
                    <a
                      href={
                        GoogleMapURL +
                        `${getMarker.location.lat},${getMarker.location.lng}`
                      }
                    >
                      Google Mapを開く
                    </a>
                  </div>
                </InfoWindow>
              ) : null}
            </>
          ))}
        </GoogleMap>
      </main>
    ) : (<h1>読込中...</h1>)}
      <div className="btn-wrapper">
        <IconButton
          style={{ width: "80px", height: "80px" }}
          color="primary"
          component="label"
          // onClick={getCurrentLocation}
        >
          <GpsFixedIcon style={{ width: "40px", height: "40px" }} />
        </IconButton>
      </div>
      <footer className="footer">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </BottomNavigation>
      </footer>
    </>
  );
};

export default App;
