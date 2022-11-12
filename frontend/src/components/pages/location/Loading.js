import { Box, CircularProgress, LinearProgress, Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{ width: 450, height: "100vh", margin: "auto", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}
      >
      <CircularProgress />
      </div>
    </Box>
  );
};

export default Loading;
