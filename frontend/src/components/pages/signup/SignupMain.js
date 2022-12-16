import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validation from "./validation";
import axios from "axios";
import { Box, TextField, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import { createUuid } from "../../templates/common/createUuid";

const SignupMain = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ error: false, success: false });

  console.log(validation());

  const uuid = createUuid();

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
    getValues,
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });

  const url = "http://localhost:8000/api/signup";

  const handleSubmitPostSignup = async (data) => {
    data.admin_id = uuid;
    console.log(data);
    setLoading(true);
    
    try {
      const res = await axios.post(url, data);
      console.log(res);

      if(res.data.error){
        setAlert({ ...alert, error: res.data.error, success: false })
        setLoading(false);
        return;
      }

      // 普通のアラートで登録完了と出したい。
      setAlert({ ...alert, error: false, success: res.data.success });
      setLoading(false);
      return;
    } catch (e) {
      setLoading(false);
      setAlert({ ...alert, error: "サインアップ失敗", success: false });
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
        onSubmit={handleSubmit(handleSubmitPostSignup)}
      >
        {alert.error && <Alert severity="error" sx={{ position: "absolute", top: "50px", width: "85%" }} > { alert.error } </Alert> }
        {alert.success && <Alert severity="success" sx={{ position: "absolute", top: "50px", width: "85%" }} > { alert.success } </Alert> }

        <Typography variant={"h5"} sx={{ mb: "30px", fontFamily: "nicokaku" }}>
          Sign Up
        </Typography>
        <TextField
          id="standard-required"
          type="text"
          name="name"
          label="ユーザーネーム"
          variant="standard"
          sx={{ width: "70%", marginBottom: "50px" }}
          helperText={
            (errors.name?.types.required && errors.name.message) ||
            (errors.name?.types.pattern && errors.name.message)
          }
          error={errors.name && true}
          {...register("name", validation().name)}
        />
        <TextField
          id="standard-required"
          type="email"
          name="email"
          label="メールアドレス"
          variant="standard"
          sx={{ width: "70%", marginBottom: "50px" }}
          helperText={
            (errors.email?.types.required && errors.email.message) ||
            (errors.email?.types.pattern && errors.email.message)
          }
          error={errors.email && true}
          {...register("email", validation().email)}
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
          {...register("password", validation().password)}
        />
        <TextField
          id="standard-required"
          type="password"
          name="confirmation"
          variant="standard"
          label="パスワード確認"
          sx={{ width: "70%", marginBottom: "50px" }}
          helperText={
            (errors.confirmation?.types.required && errors.confirmation.message) ||
            (errors.confirmation?.types.validate && errors.confirmation.message)
          }
          error={errors.confirmation && true}
          {...register("confirmation", validation(getValues).confirmation)}
          />
        {loading ? (
          <LoadingButton loading variant="outlined" sx={{ width: "70%" }}>
            Submit
          </LoadingButton>
            ) : (
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "70%" }}
            disabled={!isDirty || !isValid}
          >
            Signup
          </Button>
        )}
      </Box>
    </main>
  );
};

export default SignupMain;
