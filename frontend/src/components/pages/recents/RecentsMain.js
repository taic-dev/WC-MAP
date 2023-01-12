import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    JSON.parse(sessionStorage.getItem("recents")) &&
      setRecents(
        Array.from(
          new Map(
            JSON.parse(sessionStorage.getItem("recents")).map((v) => [v.id, v])
          ).values()
        )
      );
  }, []);

  return (
    <>
      <Header page="recents">閲覧履歴</Header>
      <main className="main recents__main">
        <List sx={{ width: "100%", margin: "30px 0 50px" }}>
          <Divider variant="inset" component="li" sx={{ margin: 0 }} />
          {recents.length == 0 ? (
            <>
              <ListItem style={{ justifyContent: "center" }}>
                閲覧履歴はありません
              </ListItem>
              <Divider variant="inset" component="li" sx={{ margin: 0 }} />
            </>
          ) : (
            recents.map((recent) => (
              <a
                key={recent.toilet_id}
                className="recents__link"
                style={{ color: "#000", textDecoration: "none" }}
                href={`${process.env.REACT_APP_URL}?lat=${recent.latitude}&lng=${recent.longitude}`}
              >
                <ListItem alignItems="flex-start" sx={{ alignItems: "center" }}>
                  <Box
                    style={{
                      width: "30%",
                      aspectRatio: "1",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  >
                    <img
                      src={
                        recent.toilet_image[0]
                          ? recent.toilet_image[0].image_url
                          : `${process.env.PUBLIC_URL}/img/page/no-image.png`
                      }
                      alt="サムネイル画像"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <List style={{ width: "70%" }}>
                    <ListItemText
                      primary={recent.toilet_name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{
                              display: "block",
                              marginTop: "10px",
                              fontSize: "13px",
                            }}
                            component="span"
                          >
                            {recent.description.length >= 50
                              ? recent.description.slice(0, 50) + "..."
                              : recent.description}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <IconList marker={recent} />
                  </List>
                </ListItem>
                <Divider variant="inset" component="li" sx={{ margin: 0 }} />
              </a>
            ))
          )}
        </List>
      </main>
      <Footer />
    </>
  );
};

export default RecentsMain;
