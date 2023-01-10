import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import IconList from "../common/IconList";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const RecentsMain = () => {
  const [recents, setRecents] = useState(JSON.parse(sessionStorage.getItem("recents")));

  return (
    <>
      <Header page="recents">閲覧履歴</Header>
      <main className="main recents__main">
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {recents.map((recent) => {
            return (
              <React.Fragment key={recent.toilet_id}>
                <ListItem alignItems="flex-start" sx={{ alignItems: "center" }}>
                  <Box style={{ width: "30%", aspectRatio: "1", objectFit: "cover", marginRight: "15px" }} >
                    <img src={`${process.env.PUBLIC_URL}/img/page/admin-page.png`} alt="サムネイル画像" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                  </Box>
                  <ListItemText
                    primary={recent.toilet_name}
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: "block", marginTop: "15px" }} component="span" >
                          {recent.description}
                        </Typography>
                        <IconList marker={recent} />
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" sx={{ margin: 0 }} />
              </React.Fragment>
            );
          })}
        </List>
      </main>
      <Footer />
    </>
  );
};

export default RecentsMain;
