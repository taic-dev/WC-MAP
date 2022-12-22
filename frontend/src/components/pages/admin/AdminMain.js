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
  const [toiletInfo,setToiletInfo] = useState([]);
  const auth = useSelector((state) => state.auth);
  const url = "/api/admin";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
        setToiletInfo(res.data.toilet_info);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);

  console.log(toiletInfo);

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
              <Avatar><WcIcon /></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`投稿された全てのトイレ件数`}
              secondary={
                <Typography
                  sx={{ display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "end", fontFamily: "nicokaku" }}
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
              <Avatar><FontAwesomeIcon style={{ width: "20px" }} icon={faToilet} /></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`あなたが投稿したトイレ件数`}
              secondary={
                <Typography
                  sx={{ display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "end", fontFamily: "nicokaku" }}
                  component="span"
                >
                  {toiletInfo.my_post_toilet_num}件
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
