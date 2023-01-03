import { Rating } from "@mui/material";
import { InfoWindow, Marker } from "@react-google-maps/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoArea from "../../pages/location/InfoArea";

const MarkerList = ({ setInfoArea }) => {
  const [activeMarker, setActiveMarker] = useState(false);
  const [markerInfo, setMarkerInfo] = useState([]);

  const url = "/api/all";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
        setMarkerInfo(res.data);

      }catch(e){
        return e;
      }
    })();
  },[]);

  const handleActiveMarker = (id) => {
    setActiveMarker(id);
  };

  return (
    <>
      {markerInfo.map((marker) => (
        <React.Fragment key={marker.toilet_id}>
          <Marker
            key={`Marker-${marker.toilet_id}`}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            onClick={() => handleActiveMarker(marker.toilet_id)}
          />

          {activeMarker === marker.toilet_id ? (
            <>
              <InfoWindow
                key={`InfoWindow-${marker.toilet_id}`}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                onCloseClick={() => setActiveMarker(false)}
              >
                <div>
                  <h1 style={{ fontSize: "18px" }} className="common__font-family">{marker.toilet_name}</h1>
                  <div className="info-window__review">
                    {/* <span>{marker.review}</span> */}
                    {/* <Rating
                      name="read-only"
                      value={marker.review}
                      size="small"
                      readOnly
                    />
                    <span>(21)</span> */}
                  </div>
                </div>
              </InfoWindow>

              <InfoArea
                marker={marker}
                handleActiveMarker={handleActiveMarker}
              />
            </>
          ) : null}
        </ React.Fragment>
      ))}
    </>
  );
};

export default MarkerList;
