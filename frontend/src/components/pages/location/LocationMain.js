import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// components
import Loading from "./Loading";
import GoogleMapArea from "./GoogleMapArea";
import CurrentLocationIcon from "./CurrentLocationIcon";
import MarkerList from "../../templates/location/MarkerList";
import Footer from "../common/Footer";

// function
import getCurrentLocation from "../../templates/common/getCurrentLocation.js";
import getParams from "../../templates/common/getParams";

const LocationMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({});
  const [viewLocation, setViewLocation] = useState({});
  const [infoArea, setInfoArea] = useState(false);
  const params = useLocation().search;

  // 現在地の取得
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        let coordinate = await getCurrentLocation();
        setCurrentLocation(coordinate);
        setViewLocation(coordinate);

      } catch (e) {
        setCurrentLocation(e);
        setViewLocation(e);
      }

      if (params) {
        setViewLocation({
          lat: getParams(params, 'lat', "number"),
          lng: getParams(params, 'lng', "number"),
        });
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <main className="main">
        {!isLoading ? (
          <>
            <GoogleMapArea currentLocation={viewLocation}>
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
