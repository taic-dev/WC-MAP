export const localStorageObj = {
  getLocalStorage: () => localStorage.getItem("auth"),
  setLocalStorage: () => localStorage.setItem("auth", true),
  checkLocalStorage: () => {
    const date = new Date();
    const nowUnix = Math.floor(date.getTime() / 1000);
    const expire = nowUnix + 1;
    let dataList = {
      expire: expire,
      auth: true,
    };
    dataList = JSON.stringify(dataList);
    localStorage.setItem("dataList", dataList);
    if (localStorage["dataList"]) {
      let getData = JSON.parse(localStorage.getItem("dataList"));
      if (getData["expire"] > nowUnix) {
        let data = getData["auth"];
        console.log("データ内容:" + data); // なんらかの文字列;
      } else {
        console.log("データは有効期限切れです。");
        localStorage.removeItem("dataList");
        let dataList = { auth: false };
        dataList = JSON.stringify(dataList);
        localStorage.setItem("dataList", dataList);
      }
    } else {
      console.log("データがありません。");
    }
  },
};
