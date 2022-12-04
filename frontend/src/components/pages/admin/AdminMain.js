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
import React, { useState } from "react";
import { useSelector } from "react-redux";

// components
import Header from "../common/Header";
import AdminFooter from "../common/AdminFooter";

const AdminMain = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Header page="auth">ホーム</Header>
      <main className="main auth__main">
        <List sx={{ padding: "100px 0" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary="ようこそ! 〇〇さん" />
          </ListItem>
          <Divider variant="inset" component="li" />
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
                  sx={{ display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "end" }}
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
                  sx={{ display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "end" }}
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
