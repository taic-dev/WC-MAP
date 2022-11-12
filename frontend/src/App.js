import React, { useEffect, useState } from "react";
import "./App.css";

// components
import Loading from "./components/pages/location/Loading";
import Main from "./components/pages/location/Main";
import Footer from "./components/pages/common/Footer";
import GoogleMapArea from "./components/templates/location/GoogleMapArea";

// function
import getCurrentLocation from "./components/templates/common/getCurrentLocation.js";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 35.681236,
    lng: 139.767125,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        let coordinate = await getCurrentLocation();
        console.log(coordinate);
        setCurrentLocation(coordinate);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Main>
        {!isLoading ? (
          <GoogleMapArea currentLocation={currentLocation}></GoogleMapArea>
        ) : (
          <Loading />
        )}
      </Main>
      <Footer />
    </>
  );
};

export default App;
