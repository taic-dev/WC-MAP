import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import AdminFooter from "../common/AdminFooter";
import Header from "../common/Header";
import MultipleImageUploadArea from "./MultipleImageUploadArea";
import CurrentLocationArea from "./CurrentLocationArea";

function PostMain() {
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

  const handleSubmitPostPage = async (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <Header page="post">投稿ページ</Header>
      <main className="main post__main">
        <Box
          component="form"
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "50px 0",
          }}
          onSubmit={handleSubmit(handleSubmitPostPage)}
        >
          <TextField
            id="standard-required"
            type="text"
            variant="standard"
            label="トイレの名前"
            sx={{ width: "70%", marginBottom: "50px" }}
            helperText={
              (errors.password?.types.required && errors.password.message) ||
              (errors.password?.types.minLength && errors.password.message)
            }
            error={errors.password && true}
            {...register("name")}
          />
          <CurrentLocationArea />
          <MultipleImageUploadArea />
          <TextField
            id="standard-select-currency"
            label="料金"
            variant="standard"
            style={{ width: "70%", marginBottom: "50px" }}
            select
            {...register("price")}
          >
            <MenuItem key="" value="無料">
              無料
            </MenuItem>
            <MenuItem key="" value="有料">
              有料
            </MenuItem>
          </TextField>
          <TextField
            id="standard-select-currency"
            label="清潔さ"
            variant="standard"
            style={{ width: "70%", marginBottom: "50px" }}
            select
            {...register("clean")}
          >
            <MenuItem key="" value="excellent">
              非常に綺麗
            </MenuItem>
            <MenuItem key="" value="good">
              綺麗
            </MenuItem>
            <MenuItem key="" value="bad">
              汚い
            </MenuItem>
            <MenuItem key="" value="terrible">
              非常に汚い
            </MenuItem>
          </TextField>
          <TextField
            id="standard-select-currency"
            label="個室数"
            variant="standard"
            style={{ width: "70%", marginBottom: "50px" }}
            select
            {...register("privateRoomNum")}
          >
            <MenuItem key="" value="1">
              1
            </MenuItem>
            <MenuItem key="" value="2">
              2
            </MenuItem>
            <MenuItem key="" value="3">
              3
            </MenuItem>
            <MenuItem key="" value="4">
              4
            </MenuItem>
            <MenuItem key="" value="5">
              5
            </MenuItem>
            <MenuItem key="" value="6">
              6
            </MenuItem>
          </TextField>
          <FormControl style={{ width: "70%", marginBottom: "50px" }}>
            <FormLabel id="private-room-type-group-label">個室タイプ</FormLabel>
            <RadioGroup
              aria-labelledby="private-room-type-group-label"
              defaultValue="sum"
              name="private-room-type"
              row
            >
              <FormControlLabel
                value="sum"
                control={<Radio />}
                label="和式"
                {...register("privateRoomType")}
              />
              <FormControlLabel
                value="western"
                control={<Radio />}
                label="洋式"
                {...register("privateRoomType")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl style={{ width: "70%", marginBottom: "50px" }}>
            <FormLabel id="washlet-group-label">ウォシュレット</FormLabel>
            <RadioGroup
              aria-labelledby="washlet-group-label"
              defaultValue="yes"
              name="washlet"
              row
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="あり"
                {...register("washlet")}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="なし"
                {...register("washlet")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl style={{ width: "70%", marginBottom: "50px" }}>
            <FormLabel id="diaper-exchange-table-group-label">
              おむつ交換台
            </FormLabel>
            <RadioGroup
              aria-labelledby="diaper-exchange-table-group-label"
              defaultValue="yes"
              name="diaper-exchange-table"
              row
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="あり"
                {...register("diaperExchangeTable")}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="なし"
                {...register("diaperExchangeTable")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl style={{ width: "70%", marginBottom: "50px" }}>
            <FormLabel id="multi-purpose-room-group-label">多目的室</FormLabel>
            <RadioGroup
              aria-labelledby="multi-purpose-room-group-label"
              defaultValue="yes"
              name="multi-purpose-room"
              row
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="あり"
                {...register("multiPurposeRoom")}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="なし"
                {...register("multiPurposeRoom")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl style={{ width: "70%", marginBottom: "50px" }}>
            <FormLabel id="description-group-label">説明</FormLabel>
            <Textarea
              minRows={2}
              style={{ width: "100%" }}
              {...register("description")}
            />
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
            style={{ marginBottom: "50px" }}
            // disabled={!isDirty || !isValid}
          >
            確認画面へ
          </Button>
        </Box>
      </main>
      <AdminFooter />
    </>
  );
}

export default PostMain;
