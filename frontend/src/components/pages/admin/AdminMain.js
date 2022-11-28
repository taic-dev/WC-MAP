import React from "react";

const AdminMain = () => {
  localStorage.setItem("login", JSON.stringify({ auth: true }));
  return <main>管理者ページ</main>;
};

export default AdminMain;
