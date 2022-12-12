import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        margin: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          width: "100%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
          alt="ロゴ画像"
          style={{ width: "100%" }}
        />
        <LinearProgress color="inherit" sx={{ width: "60%", margin: "auto" }} />
      </div>
    </Box>
  );
};

export default Loading;
