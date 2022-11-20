import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
} from "@mui/material";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <footer className="footer">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      </BottomNavigation>
    </footer>
  );
};

export default Footer;