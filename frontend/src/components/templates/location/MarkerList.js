import React, { useEffect, useState } from "react";
import axios from "axios";
import { InfoWindow, Marker } from "@react-google-maps/api";
import InfoArea from "../../pages/location/InfoArea";

import AccessibleIcon from "@mui/icons-material/Accessible";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

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
                  <h1
                    style={{ fontSize: "18px" }}
                    className="common__font-family"
                  >
                    {marker.toilet_name}
                  </h1>
                  <ul className="info-window__icon">
                    { marker.price == "有料" && <li><CurrencyYenIcon style={{ width: "15px" }} /></li> }
                    { marker.is_washlet == 1 && <li><FontAwesomeIcon icon={faDroplet} style={{ color : '#1E90FF' }} /></li> }
                    { marker.is_multi_purpose_room == 1 && <li><AccessibleIcon style={{ color: '#008000', width: "20px" }} /></li> }
                  </ul>
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
