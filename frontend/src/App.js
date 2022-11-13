import React, { useEffect, useState } from "react";
import "./App.css";

// components
import Loading from "./components/pages/location/Loading";
import Main from "./components/pages/location/Main";
import Footer from "./components/pages/common/Footer";
import GoogleMapArea from "./components/pages/location/GoogleMapArea";
import CurrentLocationIcon from "./components/pages/location/CurrentLocationIcon";
import MarkerList from "./components/templates/location/MarkerList";
import InfoArea from "./components/pages/location/InfoArea";

// function
import getCurrentLocation from "./components/templates/common/getCurrentLocation.js";

// reset
import { Reset } from "styled-reset";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [infoArea, setInfoArea] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        let coordinate = await getCurrentLocation();
        setCurrentLocation(coordinate);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Reset />
      <Main>
        {!isLoading ? (
          <>
            <GoogleMapArea currentLocation={currentLocation}>
              <CurrentLocationIcon currentLocation={currentLocation} />
              <MarkerList setInfoArea={setInfoArea} />
            </GoogleMapArea>
            {/* {infoArea && <InfoArea infoArea={infoArea} />} */}
          </>
        ) : (
          <Loading />
        )}
      </Main>
      <Footer />
    </>
  );
};

export default App;
