import React, { useState } from "react";

const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("この端末では位置情報が取得できません。");
    return;
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {  
          let coordinate = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };  
          resolve(coordinate);
        },
        (error) => {
          switch (error.code) {
            case 1: //PERMISSION_DENIED
              alert("位置情報の利用が許可されていません");
              break;
            case 2: //POSITION_UNAVAILABLE
              alert("現在位置が取得できませんでした");
              break;
            case 3: //TIMEOUT
              alert("タイムアウトになりました");
              break;
            default:
              alert("その他のエラー(エラーコード:" + error.code + ")");
              break;
          }
        }
      )
  });

};

export default getCurrentLocation;
