import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AccessibleIcon from "@mui/icons-material/Accessible";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

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
                  {/* Marker部分と同じ */}
                  <ul className="common__icon">
                    { <li><AutoAwesomeIcon style={{ color: "#ffd700", width: "15px" }} /></li> }
                    { <li><CurrencyYenIcon style={{ width: "15px" }} /></li> }
                    { <li><FontAwesomeIcon icon={faDroplet} style={{ color : '#1E90FF' }} /></li> }
                    { <li><AccessibleIcon style={{ color: '#008000', width: "20px" }} /></li> }
                    {/* { marker.cleanliness == "非常に綺麗" && <li><AutoAwesomeIcon style={{ color: "#ffd700", width: "15px" }} /></li> } */}
                    {/* { marker.price == "有料" && <li><CurrencyYenIcon style={{ width: "15px" }} /></li> } */}
                    {/* { marker.is_washlet == 1 && <li><FontAwesomeIcon icon={faDroplet} style={{ color : '#1E90FF' }} /></li> } */}
                    {/* { marker.is_multi_purpose_room == 1 && <li><AccessibleIcon style={{ color: '#008000', width: "20px" }} /></li> } */}
                  </ul>
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
                  {/* Marker部分と同じ */}
                  <ul className="common__icon">
                    { <li><AutoAwesomeIcon style={{ color: "#ffd700", width: "15px" }} /></li> }
                    { <li><CurrencyYenIcon style={{ width: "15px" }} /></li> }
                    { <li><FontAwesomeIcon icon={faDroplet} style={{ color : '#1E90FF' }} /></li> }
                    { <li><AccessibleIcon style={{ color: '#008000', width: "20px" }} /></li> }
                    {/* { marker.cleanliness == "非常に綺麗" && <li><AutoAwesomeIcon style={{ color: "#ffd700", width: "15px" }} /></li> } */}
                    {/* { marker.price == "有料" && <li><CurrencyYenIcon style={{ width: "15px" }} /></li> } */}
                    {/* { marker.is_washlet == 1 && <li><FontAwesomeIcon icon={faDroplet} style={{ color : '#1E90FF' }} /></li> } */}
                    {/* { marker.is_multi_purpose_room == 1 && <li><AccessibleIcon style={{ color: '#008000', width: "20px" }} /></li> } */}
                  </ul>
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
