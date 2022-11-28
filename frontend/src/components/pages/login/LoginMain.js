import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginMain = ({ auth, setAuth }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [error, setError] = useState({
    email: false,
    password: false,
    alert: false
  });
  const navigate = useNavigate();
  const loginURL = "htttps/localhost:8000/login";

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmitPostLogin = async (e) => {
    e.preventDefault();
    console.log(values);

    // 情報の受け渡し
    await axios.post(loginURL, 
      values
      ).then((response)=>{
        console.log(response);
        navigate("/admin");
        setAuth(true);
      }).catch((error)=>{
        setError({...error, alert: "ログイン失敗"});
        console.log("送信失敗");
      })
  };

  return (
    <main className="main">
      <Box
        component="form"
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
        onSubmit={(e) => handleSubmitPostLogin(e)}
      >
        { error.alert && <Alert severity="error" sx={{position: "absolute", top: "50px", width: "85%"}}>{error.alert}</Alert> }

        <Typography variant={"h5"} sx={{ mb: "30px" }}>
          Log In
        </Typography>
        <TextField
          required
          id="standard-required"
          label="メールアドレス"
          variant="standard"
          onChange={handleChange("email")}
          sx={{ width: "70%", marginBottom: "50px" }}
        />
        <InputLabel
          htmlFor="standard-adornment-password"
          sx={{ display: "block", width: "70%", textAlign: "left" }}
        >
          Password *
        </InputLabel>
        <Input
          id="standard-adornment-password"
          label="パスワード"
          sx={{ width: "70%", marginBottom: "50px" }}
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
        <Button variant="contained" type="submit" sx={{ width: "70%" }}>
          Login
        </Button>
      </Box>
    </main>
  );
};

export default LoginMain;
