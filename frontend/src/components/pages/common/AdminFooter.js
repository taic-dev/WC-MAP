import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import PostAddIcon from "@mui/icons-material/PostAdd";

const AdminFooter = () => {
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
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/admin" />
        <BottomNavigationAction label="Post" icon={<PostAddIcon />} component={Link} to="/post" />
        <BottomNavigationAction label="Log Out" icon={<LogoutIcon />} component={Link} to="/logout" />
      </BottomNavigation>
    </footer>
  );
};

export default AdminFooter;
