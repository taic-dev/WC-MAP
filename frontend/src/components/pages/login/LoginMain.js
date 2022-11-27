import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Button from '@mui/material/Button';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import React from "react";
import { useState } from "react";

const LoginMain = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <main className="main">
      <Box
        component="form"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h5"} sx={{ mb: "30px" }}>
          Log In
        </Typography>
        <TextField
          required
          id="standard-required"
          label="メールアドレス"
          variant="standard"
          sx={{ width: "60%", marginBottom: "50px" }}
        />
        <InputLabel htmlFor="standard-adornment-password" sx={{ display: "block", width: "60%", textAlign: "left" }}>Password</InputLabel>
        <Input
          id="standard-adornment-password"
          label="パスワード"
          sx={{ width: "60%", marginBottom: "50px" }}
          required
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button variant="contained" sx={{ width: "60%" }}>Login</Button>
      </Box>
    </main>
  );
};

export default LoginMain;
