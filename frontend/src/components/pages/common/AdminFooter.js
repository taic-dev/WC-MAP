import React, { useState } from "react";
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
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Post" icon={<PostAddIcon />} />
        <BottomNavigationAction label="Log Out" icon={<LogoutIcon />} />
      </BottomNavigation>
    </footer>
  );
};

export default AdminFooter;
