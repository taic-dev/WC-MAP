import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { createUuid } from "../../templates/common/createUuid";
import CancelIcon from "@mui/icons-material/Cancel";

const MultipleImageUpload = () => {
  const [images, setImages] = useState([]);
  const maxImagesUpload = 4;
  const inputId = Math.random().toString(32).substring(2);
  let UUID = createUuid();

  const handleOnAddImage = async (e) => {
    if (!e.target.files) return;
    const files = e.target.files;
    const Base64 = await getBase64(files[files.length - 1]);
    console.log(Base64);
    setImages([...images, { id: UUID, src: Base64 }]);
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
    console.log(id);
    setImages(images.filter((img) => img.id !== id));
  };

  console.log(images);

  return (
    <>
      <div className="post__images">
        {images.map((image) => {
          return (
            <div key={image.id} className="post__image">
              <CancelIcon onClick={() => handleOnRemoveImage(image.id)} />
              <img src={image.src} alt="アップロード画像" />
            </div>
          );
        })}
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
        >
          画像追加
        </Button>
        <input
          id={inputId}
          type="file"
          accept="image/*,.png,.jpg,.jpeg"
          style={{ display: "none" }}
          multiple
          onChange={(e) => handleOnAddImage(e)}
        />
      </label>
    </>
  );
};

export default MultipleImageUpload;
