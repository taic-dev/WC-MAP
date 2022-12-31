import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import MultipleImageUploadArea from "./MultipleImageUploadArea";
import CurrentLocationArea from "./CurrentLocationArea";
import validation from "./validation";
import axios from "axios";

const EditModal = ({ open, setOpen, toiletItemDetail, setToiletItemDetail, images, setImages, setAlert }) => {

  console.log(validation());

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });

  const url = "/api/update"

  const handleSubmitPostPage = async (data) => {
    data.toilet_id = toiletItemDetail.toilet_id;
    data.imageBase64 = images;

    // console.log(data);
    // return;
    (async ()=>{
      try{
        const res = await axios.post(url,data);
        console.log(res);
        if(res.data.session.alert.success){
          setAlert(res.data.session.alert.success);
        }
        window.location.href="/archive";
      }catch (e){
        return e;
      }
    })();
  };

  const handleClickCloseModal = () => {
    setOpen(false);
  };

  const handleChangeTextField = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    console.log(e.target.value);
    console.log(e.target.id);
    console.log(e.target);
    console.log(toiletItemDetail)
    if(e.target.id){
      setToiletItemDetail({...toiletItemDetail, [e.target.id] : value});
      return;
    }
    setToiletItemDetail({...toiletItemDetail, [e.target.name] : value});
  }

  console.log(errors);

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={() => handleClickCloseModal()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{
        maxWidth: "450px",
        margin: "auto",
        overflow: "scroll",
        zIndex: "10",
      }}
    >
      <Box
        component="form"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "50px 0",
          background: "#fff",
          margin: "30px 15px",
        }}
        onSubmit={handleSubmit(handleSubmitPostPage)}
      >
        <CancelIcon
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
          onClick={()=>handleClickCloseModal()}
        />
        <TextField
          id="toilet_name"
          type="text"
          variant="standard"
          label="トイレの名前"
          value={toiletItemDetail.toilet_name}
          sx={{ width: "70%", marginBottom: "50px" }}
          helperText={
            (errors.name?.types.required && errors.name.message) ||
            (errors.name?.types.minLength && errors.name.message) ||
            (errors.name?.types.maxLength && errors.name.message)
          }
          error={errors.name && true}
          {...register("name", validation().name)}
          onChange={(e) => handleChangeTextField(e)}
        />
        <CurrentLocationArea register={register} toiletItemDetail={toiletItemDetail} errors={errors} />
        <MultipleImageUploadArea
          register={register}
          images={images}
          setImages={setImages}
        />
        <TextField
          id="price"
          label="料金"
          value={toiletItemDetail.price}
          variant="standard"
          sx={{ width: "70%", marginBottom: "50px" }}
          select
          helperText={errors.price?.types.required && errors.price.message}
          error={errors.price && true}
          {...register("price", validation().price)}
          onChange={(e) => handleChangeTextField(e)}
        >
          <MenuItem key="" value="無料">
            無料
          </MenuItem>
          <MenuItem key="" value="有料">
            有料
          </MenuItem>
        </TextField>
        <TextField
          id="cleanliness"
          label="清潔さ"
          value={toiletItemDetail.cleanliness}
          variant="standard"
          style={{ width: "70%", marginBottom: "50px" }}
          select
          helperText={errors.clean?.types.required && errors.clean.message}
          error={errors.clean && true}
          {...register("cleanliness", validation().clean)}
          onChange={(e) => handleChangeTextField(e)}
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
          id="is_multi_purpose_room"
          label="個室数"
          value={toiletItemDetail.private_room_num}
          variant="standard"
          style={{ width: "70%", marginBottom: "50px" }}
          select
          helperText={
            errors.privateRoomNum?.types.required &&
            errors.privateRoomNum.message
          }
          error={errors.privateRoomNum && true}
          {...register("private_room_num", validation().privateRoomNum)}
          onChange={(e) => handleChangeTextField(e)}
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
            defaultValue={toiletItemDetail.private_room_type}
            name="private_room_type"
            row
            onChange={(e) => handleChangeTextField(e)}
          >
            <FormControlLabel
              value="和式"
              control={<Radio />}
              label="和式"
              {...register("private_room_type")}
            />
            <FormControlLabel
              value="洋式"
              control={<Radio />}
              label="洋式"
              {...register("private_room_type")}
            />
          </RadioGroup>
        </FormControl>
        <FormControl style={{ width: "70%", marginBottom: "50px" }}>
          <FormLabel id="washlet-group-label">ウォシュレット</FormLabel>
          <RadioGroup
            aria-labelledby="washlet-group-label"
            defaultValue={toiletItemDetail.is_washlet}
            name="washlet"
            row
            onChange={(e) => handleChangeTextField(e)}
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
            defaultValue={toiletItemDetail.is_multi_purpose_room}
            name="multi_purpose_room"
            row
            onChange={(e) => handleChangeTextField(e)}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="あり"
              {...register("multi_purpose_room")}
            />
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="なし"
              {...register("multi_purpose_room")}
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="description"
          type="text"
          variant="standard"
          label="説明"
          value={toiletItemDetail.description}
          rows={10}
          sx={{ width: "70%", marginBottom: "50px" }}
          multiline
          helperText={
            (errors.description?.types.required &&
              errors.description.message) ||
            (errors.description?.types.minLength &&
              errors.description.message) ||
            (errors.description?.types.maxLength && errors.description.message)
          }
          error={errors.description && true}
          {...register("description", validation().description)}
          onChange={(e) => handleChangeTextField(e)}
        />
        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          style={{ marginBottom: "50px" }}
          disabled={!isDirty || !isValid}
        >
          確認画面へ
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
