import React, { useEffect, useState } from "react";

// components
import Loading from "./Loading";
import GoogleMapArea from "./GoogleMapArea";
import CurrentLocationIcon from "./CurrentLocationIcon";
import MarkerList from "../../templates/location/MarkerList";
import Footer from "../common/Footer";

// function
import getCurrentLocation from "../../templates/common/getCurrentLocation.js";

const LocationMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({});
  const [infoArea, setInfoArea] = useState(false);

  // 現在地の取得
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
      <main className="main">
        {!isLoading ? (
          <>
            <GoogleMapArea currentLocation={currentLocation}>
              <CurrentLocationIcon currentLocation={currentLocation} />
              <MarkerList setInfoArea={setInfoArea} />
            </GoogleMapArea>
          </>
        ) : (
          <Loading />
        )}
      </main>
      <Footer />
    </>
  );
};

export default LocationMain;
