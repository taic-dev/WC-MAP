import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

const RecentsMain = () => {
  return (
    <>
      <Header page="recents">閲覧履歴</Header>
      <main className="main recents__main">
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start" sx={{ alignItems: "center" }}>
            <Box style={{ width: "30%", aspectRatio: "1", objectFit: "cover", marginRight: "15px", }}>
                <img src={`${process.env.PUBLIC_URL}/img/page/admin-page.png`} alt="サムネイル画像" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
            </Box>
            <ListItemText
              primary="トイレの名前トイレの名前トイレの名前"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "block", marginTop: "15px" }}
                    component="span"
                  >
                    詳細情報詳細情報詳細情報詳細情報詳細情報詳細情報…
                  </Typography>
                  <List sx={{ display: "flex",  }}>
                    <ListItem sx={{ width: "fit-content" }}>icon</ListItem>
                    <ListItem sx={{ width: "fit-content" }}>icon</ListItem>
                    <ListItem sx={{ width: "fit-content" }}>icon</ListItem>
                  </List>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{ margin: 0 }} />
          <ListItem alignItems="flex-start" sx={{ alignItems: "center" }}>
            <Box style={{ width: "30%", aspectRatio: "1", objectFit: "cover", marginRight: "15px", }}>
                <img src={`${process.env.PUBLIC_URL}/img/page/admin-page.png`} alt="サムネイル画像" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
            </Box>
            <ListItemText
              primary="トイレの名前トイレの名前トイレの名前"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "block", marginTop: "15px" }}
                    component="span"
                  >
                    詳細情報詳細情報詳細情報詳細情報詳細情報詳細情報…
                  </Typography>
                  <List sx={{ display: "flex",  }}>
                    <ListItem sx={{ width: "fit-content" }}>icon</ListItem>
                    <ListItem sx={{ width: "fit-content" }}>icon</ListItem>
                    <ListItem sx={{ width: "fit-content" }}>icon</ListItem>
                  </List>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{ margin: 0 }} />
        </List>
      </main>
      <Footer />
    </>
  );
};

export default RecentsMain;
