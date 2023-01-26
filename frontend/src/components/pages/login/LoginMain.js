import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validation } from "./validation";
import axios from "axios";
import { Box, TextField, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";

const LoginMain = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ alert: false });

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });
  
  const url = "/api/login";

  const handleSubmitPostLogin = async (data) => {
    console.log(data);
    setLoading(true);

    // 情報の受け渡し
    try {
      const res = await axios.post(url, data);
      console.log(res);

      if(res.data.error){
        setError({ alert: res.data.error })
        setLoading(false);
        return;
      }
      setLoading(false);
      window.location.href="/admin"

    } catch (e) {
      setLoading(false);
      setError({ alert: "ログイン失敗" });
      console.error("送信失敗");
    }
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
        onSubmit={handleSubmit(handleSubmitPostLogin)}
      >
        {error.alert && (
          <Alert
            severity="error"
            sx={{ position: "absolute", top: "50px", width: "85%" }}
          >
            {error.alert}
          </Alert>
        )}

        <Typography variant={"h5"} sx={{ mb: "30px", fontFamily: "nicokaku" }}>
          Log In
        </Typography>
        <TextField
          id="standard-required"
          type="email"
          name="enail"
          label="メールアドレス"
          variant="standard"
          sx={{ width: "70%", marginBottom: "50px" }}
          helperText={
            (errors.email?.types.required && errors.email.message) ||
            (errors.email?.types.pattern && errors.email.message)
          }
          error={errors.email && true}
          {...register("email", validation.email)}
        />
        <TextField
          id="standard-required"
          type="password"
          name="password"
          variant="standard"
          label="パスワード"
          sx={{ width: "70%", marginBottom: "50px" }}
          helperText={
            (errors.password?.types.required && errors.password.message) ||
            (errors.password?.types.minLength && errors.password.message)
          }
          error={errors.password && true}
          {...register("password", validation.password)}
        />
        {loading ? (
          <LoadingButton loading variant="outlined" sx={{ width: "70%", marginBottom: "30px" }}>
            Submit
          </LoadingButton>
        ) : (
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "70%", marginBottom: "30px" }}
            disabled={!isDirty || !isValid}
          >
            Login
          </Button>
        )}
      <Link to="/signup" style={{ fontSize: "13px" }}>Signupはこちら</Link>
      </Box>
    </main>
  );
};

export default LoginMain;
