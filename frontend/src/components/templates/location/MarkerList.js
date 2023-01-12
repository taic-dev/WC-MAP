import React, { useEffect, useState } from "react";
import axios from "axios";
import { InfoWindow, Marker } from "@react-google-maps/api";
import InfoArea from "../../pages/location/InfoArea";
import IconList from "../../pages/common/IconList";

const MarkerList = ({ setInfoArea }) => {
  const [activeMarker, setActiveMarker] = useState(false);
  const [markerInfo, setMarkerInfo] = useState([]);

  const url = "/api/all";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setMarkerInfo(res.data);
      } catch (e) {
        return e;
      }
    })();
  }, []);

  const handleActiveMarker = (id) => {
    setActiveMarker(id);
  };

  const handleAddSessionStrage = (marker = {}) => {
    if(!sessionStorage.getItem('recents')){
      sessionStorage.setItem('recents', JSON.stringify([]));
    }

    delete marker.admin_id;
    delete marker.created_at;
    delete marker.deleted_at;
    delete marker.updated_at;
    const recentsArray = JSON.parse(sessionStorage.getItem('recents'));
    sessionStorage.setItem('recents', JSON.stringify([marker, ...recentsArray]));
  }

  return (
    <>
      {markerInfo.map((marker) => (
        <React.Fragment key={marker.toilet_id}>
          <Marker
            key={`Marker-${marker.toilet_id}`}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            onClick={() => {
              handleActiveMarker(marker.toilet_id);
              handleAddSessionStrage(marker);
            }}
          />

          {activeMarker === marker.toilet_id ? (
            <>
              <InfoWindow
                key={`InfoWindow-${marker.toilet_id}`}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                onCloseClick={() => setActiveMarker(false)}
              >
                <div>
                  <h1
                    style={{ fontSize: "18px" }}
                    className="common__font-family"
                  >
                    {marker.toilet_name}
                  </h1>
                  <IconList marker={marker} />
                </div>
              </InfoWindow>

              <InfoArea
                marker={marker}
                handleActiveMarker={handleActiveMarker}
              />
            </>
          ) : null}
        </React.Fragment>
      ))}
    </>
  );
};

export default MarkerList;
