const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("この端末では位置情報が取得できません。");
    return;
  }

  let coordinate = { lat: 35.681236, lng: 139.767125 };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        coordinate = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        resolve(coordinate);
      },
      (error) => {
        switch (error.code) {
          case 1: //PERMISSION_DENIED
            alert("位置情報の利用が許可されていません");
            reject(coordinate);
            break;
          case 2: //POSITION_UNAVAILABLE
            alert("現在位置が取得できませんでした");
            reject(coordinate);
            break;
          case 3: //TIMEOUT
            alert("タイムアウトになりました");
            reject(coordinate);
            break;
          default:
            alert("その他のエラー(エラーコード:" + error.code + ")");
            reject(coordinate);
            break;
        }
      }
    );
  });
};

export default getCurrentLocation;
