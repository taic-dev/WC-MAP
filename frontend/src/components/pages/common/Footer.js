import React, { useState } from "react";
import { Link } from "react-router-dom"
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoginIcon from '@mui/icons-material/Login';

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
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} component={Link} to="/recents" />
        <BottomNavigationAction label="Login" icon={<LoginIcon />} component={Link} to="/login" />
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
