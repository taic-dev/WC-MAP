import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

const GoogleMapArea = ({ currentLocation }) => {
  const [activeMarker, setActiveMarker] = useState(false);

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

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const GoogleMapURL = "https://www.google.co.jp/maps?q=";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD7Tvp_twEILZF9ia8LxblM4J02J1qGv3U",
  });

  if (!isLoaded) return <div>Loading...</div>;

  const handleActiveMarker = (id) => {
    console.log(id);
    setActiveMarker(id);
  };

    // 現在地の取得
  // const getCurrentLocation = () => {

  // };

  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={currentLocation}>
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
  );
};

export default GoogleMapArea;
