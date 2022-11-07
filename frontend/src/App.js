import React from "react";
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

import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const App = () => {
  const [value, setValue] = React.useState(0);
  const [currentLocation, setCurrentLocation] = React.useState({
    lat: 35.681236,
    lng: 139.767125,
  });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD7Tvp_twEILZF9ia8LxblM4J02J1qGv3U",
  });

  if (!isLoaded) return <div>Loading...</div>;

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 35.681236,
    lng: 139.767125,
  };

  // 現在地の取得
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(position.coords);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      <main className="main">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={currentLocation}
        >
          <Marker position={currentLocation} />
        </GoogleMap>

        <div className="btn-wrapper">
          <IconButton
            style={{ width: "80px", height: "80px" }}
            color="primary"
            component="label"
            onClick={getCurrentLocation}
          >
            <GpsFixedIcon style={{ width: "40px", height: "40px" }} />
          </IconButton>
        </div>
      </main>
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
