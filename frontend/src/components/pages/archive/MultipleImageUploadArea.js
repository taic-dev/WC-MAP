import React, { useState } from "react";
import { Button } from "@mui/material";
import { createUuid } from "../../templates/common/createUuid";
import CancelIcon from "@mui/icons-material/Cancel";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MultipleImageUpload = ({ register, images, setImages }) => {

  const ErrorSwal = withReactContent(Swal);
  const maxImagesUpload = 4;
  const inputId = Math.random().toString(32).substring(2);
  let UUID = createUuid();

  const handleOnAddImage = async (e) => {
    if (!e.target || !e.target.files) return;
    console.log(e.target.files);
    // 5MB以上だったら 
    if (e.target.files[0].size >= 5242880){
      ErrorSwal.fire({
        title: "5MB以下の画像を選択してください",
        icon: "error",
      })
      return;
    }
    const files = e.target.files;
    const Base64 = await getBase64(files[files.length - 1]);
    setImages([...images, { id: UUID, image_url: Base64 }]);
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.onloadend = (e) => {
        resolve(e.currentTarget.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleOnRemoveImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <>
      <div className="post__images">
        { images.length > 0 ? (images.map((image) => {
          return (
            <div key={image.id} className="post__image">
              <CancelIcon onClick={() => handleOnRemoveImage(image.id)} />
              <img src={image.image_url} alt="アップロード画像" />
            </div>
          );
        })) : (
          <div className="post__image--unset">
            <img src={`${process.env.PUBLIC_URL}/img/page/no-image.png`} alt="画像なし" />
          </div>
        )}
      </div>
      <label
        htmlFor={inputId}
        style={{
          cursor: "pointer", 
          marginBottom: "50px", 
          width: "70%", 
          pointerEvents: images.length >= maxImagesUpload ? "none" : "auto",
        }}
      >
        <Button
          variant="contained"
          disabled={images.length >= maxImagesUpload && true}
          component="span"
          sx={{ width: "100%" }}
          endIcon={<AddPhotoAlternateIcon />}
          helper
        >
          画像追加
        </Button>
        <input
          id={inputId}
          type="file"
          accept="image/*,.png,.jpg,.jpeg"
          style={{ display: "none" }}
          multiple
          {...register("images")}
          onChange={(e) => {
            register("images").onChange(e)
            handleOnAddImage(e)
          }
          }
        />
        <p style={{ fontSize: "13px", marginTop: "15px" }}>※5MB以下の画像を選択してください。</p>
      </label>
    </>
  );
};

export default MultipleImageUpload;
