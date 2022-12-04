import React, { useState } from "react";
import { Link } from "react-router-dom"
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const [value, setValue] = useState(0);
  const admin = localStorage.getItem("admin");

  return (
    <footer className="footer">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} component={Link} to="/login" />
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
