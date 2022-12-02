import React from "react";
import { useSelector } from "react-redux";

const AdminMain = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <main>
      管理者ページ
      {console.log(auth)}
    </main>
  );
};

export default AdminMain;
