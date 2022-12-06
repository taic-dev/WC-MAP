import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import getCurrentLocation from "../../templates/common/getCurrentLocation";
import LoadingButton from "@mui/lab/LoadingButton";

const CurrentLocationArea = () => {
  const [loading, setLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({ lat: "", lng: "" });

  const handleOnAddCurrentLocation = async () => {
    setLoading(true);
    const currentLocationObj = await getCurrentLocation();
    setCurrentLocation(currentLocationObj);
    setLoading(false);
  };

  console.log(currentLocation);

  return (
    <FormControl style={{ width: "70%", marginBottom: "50px" }}>
      <FormLabel id="demo-radio-buttons-group-label">トイレの位置</FormLabel>
      <div style={{ display: "flex" }}>
        <TextField
          id="standard-required"
          type="text"
          variant="standard"
          label="緯度"
          value={currentLocation.lat}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-required"
          type="text"
          variant="standard"
          label="経度"
          value={currentLocation.lng}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      {loading ? (
        <LoadingButton
          loading
          variant="outlined"
          sx={{ marginTop: "25px" }}
        >
          Submit
        </LoadingButton>
      ) : (
        <Button
          variant="contained"
          endIcon={<MyLocationIcon />}
          sx={{ marginTop: "25px" }}
          onClick={handleOnAddCurrentLocation}
        >
          現在地を取得
        </Button>
      )}
    </FormControl>
  );
};

export default CurrentLocationArea;
