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
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import AdminFooter from "../common/AdminFooter";
import Header from "../common/Header";
import MultipleImageUploadArea from "./MultipleImageUploadArea";
import CurrentLocationArea from "./CurrentLocationArea";
import validation from "./validation";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { createUuid } from "../../templates/common/createUuid";

function PostMain() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ alert: false });
  const [images, setImages] = useState([]);

  const uuid = createUuid();

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });

  const url = "/api/post"

  const handleSubmitPostPage = async (data) => {
    setLoading(true);
    data.toilet_id = uuid;
    data.imageBase64 = images;
    console.log(data);
    try{
      const res = await axios.post(url,data);

      if(!res.data.success){
        setLoading(false);
        return;
      }

      window.location.href="/archive";
      setLoading(false);
    }catch (e){
      setLoading(false);
      setError({ alert: "投稿失敗" });
    }
  };

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
              (errors.name?.types.required && errors.name.message) ||
              (errors.name?.types.minLength && errors.name.message) ||
              (errors.name?.types.maxLength && errors.name.message) 
            }
            error={errors.name && true}
            {...register("name",validation().name)}
          />
          <CurrentLocationArea register={register} errors={errors} />
          <MultipleImageUploadArea register={register} images={images} setImages={setImages} />
          <TextField
            id="standard-select-currency"
            label="料金"
            variant="standard"
            sx={{ width: "70%", marginBottom: "50px" }}
            select
            helperText={errors.price?.types.required && errors.price.message}
            error={errors.price && true}
            {...register("price",validation().price)}
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
            helperText={errors.clean?.types.required && errors.clean.message}
            error={errors.clean && true}
            {...register("clean",validation().clean)}
          >
            <MenuItem key="" value="非常に綺麗">
              非常に綺麗
            </MenuItem>
            <MenuItem key="" value="綺麗">
              綺麗
            </MenuItem>
            <MenuItem key="" value="汚い">
              汚い
            </MenuItem>
            <MenuItem key="" value="非常に汚い">
              非常に汚い
            </MenuItem>
          </TextField>
          <TextField
            id="standard-select-currency"
            label="個室数"
            variant="standard"
            style={{ width: "70%", marginBottom: "50px" }}
            select
            helperText={errors.privateRoomNum?.types.required && errors.privateRoomNum.message}
            error={errors.privateRoomNum && true}
            {...register("privateRoomNum",validation().privateRoomNum)}
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
              defaultValue="和式"
              name="private-room-type"
              row
            >
              <FormControlLabel
                value="和式"
                control={<Radio />}
                label="和式"
                {...register("privateRoomType")}
              />
              <FormControlLabel
                value="洋式"
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
              defaultValue="1"
              name="washlet"
              row
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="あり"
                {...register("washlet")}
              />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="なし"
                {...register("washlet")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl style={{ width: "70%", marginBottom: "50px" }}>
            <FormLabel id="multi-purpose-room-group-label">多目的室</FormLabel>
            <RadioGroup
              aria-labelledby="multi-purpose-room-group-label"
              defaultValue="1"
              name="multi-purpose-room"
              row
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="あり"
                {...register("multiPurposeRoom")}
              />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="なし"
                {...register("multiPurposeRoom")}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="standard-required"
            type="text"
            variant="standard"
            label="説明"
            rows={10}
            sx={{ width: "70%", marginBottom: "50px" }}
            multiline
            helperText={
              (errors.description?.types.required && errors.description.message) ||
              (errors.description?.types.minLength && errors.description.message) ||
              (errors.description?.types.maxLength && errors.description.message) 
            }
            error={errors.description && true}
            {...register("description",validation().description)}
          />
          {loading ? (
            <LoadingButton loading variant="outlined" sx={{ width: "70%", marginBottom: "50px" }}>
              Submit
            </LoadingButton>
          ) : (
            <Button
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
              style={{ width: "70%", marginBottom: "50px" }}
              disabled={!isDirty || !isValid}
            >
              投稿
            </Button>
          )}
        </Box>
      </main>
      <AdminFooter />
    </>
  );
}

export default PostMain;
