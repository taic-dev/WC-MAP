import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Header from "../common/Header";
import AdminFooter from "../common/AdminFooter";

import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToilet } from "@fortawesome/free-solid-svg-icons";
import WcIcon from "@mui/icons-material/Wc";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminMain = () => {
  const [toiletInfo, setToiletInfo] = useState([]);
  const ConfirmSwal = withReactContent(Swal);

  const url = "/api/admin";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setToiletInfo(res.data.toilet_info);
        return;
      } catch (e) {
        return e;
      }
    })();
  }, []);

  const handleClickLogoutButton = () => {
    ConfirmSwal.fire({
      title: "ログアウトしますか？",
      icon: "warning",
      text: "管理者ページを閲覧するには再度ログインが必要です。",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
    }).then((res) => {
      if (!res.isConfirmed) {
        return ConfirmSwal.fire({ title: "キャンセルしました" });
      }

      const url = '/api/logout';

      (async ()=> {
        try{
          const res = await axios.get(url);

          if(!res.data){
            return ConfirmSwal.fire({
              title: "ログアウトに失敗しました",
              icon: "error",
            });
          }

          window.location.href='/login';

        }catch(e){
          return e;
        }
      })();
    });
  };

  return (
    <>
      <Header page="admin">ホーム</Header>
      <main className="main admin__main">
        <List sx={{ padding: "8vh 0" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={`ようこそ! ${toiletInfo.user_name}さん`} />
          </ListItem>
        </List>
        <List>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WcIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`投稿された全てのトイレ件数`}
              secondary={
                <Typography
                  sx={{
                    display: "block",
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "end",
                    fontFamily: "nicokaku",
                  }}
                  component="span"
                >
                  {toiletInfo.all_toilet_num}件
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FontAwesomeIcon style={{ width: "20px" }} icon={faToilet} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`あなたが投稿したトイレ件数`}
              secondary={
                <Typography
                  sx={{
                    display: "block",
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "end",
                    fontFamily: "nicokaku",
                  }}
                  component="span"
                >
                  {toiletInfo.my_post_toilet_num}件
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
        <Box sx={{ textAlign: "center", padding: "8vh 0" }}>
          <Button
            variant="contained"
            endIcon={<LogoutIcon />}
            onClick={handleClickLogoutButton}
          >
            Logout
          </Button>
        </Box>
      </main>
      <AdminFooter />
    </>
  );
};

export default AdminMain;
