import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToilet } from "@fortawesome/free-solid-svg-icons";
import WcIcon from '@mui/icons-material/Wc';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// components
import Header from "../common/Header";
import AdminFooter from "../common/AdminFooter";

const AdminMain = () => {
  const auth = useSelector((state) => state.auth);

  const url = "/api/admin";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
        console.log(res);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);

  return (
    <>
      <Header page="admin">ホーム</Header>
      <main className="main admin__main">
        <List sx={{ padding: "8vh 0" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary="ようこそ! 〇〇さん" />
          </ListItem>
        </List>
        <List>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar><WcIcon /></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`投稿された全てのトイレ件数`}
              secondary={
                <Typography
                  sx={{ display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "end", fontFamily: "nicokaku" }}
                  component="span"
                >
                  50件
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar><FontAwesomeIcon style={{ width: "20px" }} icon={faToilet} /></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`あなたが投稿したトイレ件数`}
              secondary={
                <Typography
                  sx={{ display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "end", fontFamily: "nicokaku" }}
                  component="span"
                >
                  4件
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </main>
      <AdminFooter />
    </>
  );
};

export default AdminMain;
