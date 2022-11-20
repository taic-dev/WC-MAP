import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Rating,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Resizable } from "re-resizable";
import {
  faToiletsPortable,
  faDroplet,
  faToilet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessibleIcon from "@mui/icons-material/Accessible";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

const InfoArea = ({
  name,
  review,
  location,
  images,
  detail,
  handleActiveMarker
}) => {
  const [descOpen, setDescOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const GoogleMapURL = "https://www.google.co.jp/maps?q=";

  const descClick = () => setDescOpen(!descOpen);
  const commentClick = () => setCommentOpen(!commentOpen);

  return (
    <div className="info-area__wrapper">
      <Resizable
        style={{ maxHeight: "95vh" }}
        defaultSize={{
          height: 250,
        }}
      >
        <div className="info-area__inner">
            <FontAwesomeIcon 
              icon={faXmark} 
              size="lg" 
              className="info-area__xmark" 
              onClick={() => handleActiveMarker(false)} 
            />
          <div className="info-area__title">
            <h1>{name}</h1>
          </div>
          <div className="info-area__review">
            <span>{review}</span>
            <Rating name="read-only" value={review} size="small" readOnly />
            <span>(21)</span>
          </div>
          <div className="info-area__link">
            <a href={GoogleMapURL + `${location.lat},${location.lng}`}>
              Googleマップで見る
            </a>
          </div>
          <ul className="info-area__img">
            {images.map((img) => (
              <li>
                <img src={img.src} alt="画像" />
              </li>
            ))}
          </ul>
          <div className="info-area__detail">
            <List>
              <ListItem>
                <ListItemIcon>
                  <CurrencyYenIcon />
                </ListItemIcon>
                <ListItemText primary={detail[0].price} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon />
                </ListItemIcon>
                <ListItemText primary={detail[0].clean} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary={detail[0].time} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faToiletsPortable} />
                </ListItemIcon>
                <ListItemText primary={`${detail[0].num}室`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FontAwesomeIcon style={{ width: "20px" }} icon={faToilet} />
                </ListItemIcon>
                <ListItemText primary={detail[0].type} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FontAwesomeIcon style={{ width: "20px" }} icon={faDroplet} />
                </ListItemIcon>
                <ListItemText primary={`ウオシュレット ${detail[0].water}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BabyChangingStationIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`おむつ交換台 ${detail[0].babyChangingStation}`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessibleIcon />
                </ListItemIcon>
                <ListItemText primary={`多目的室 ${detail[0].multipurpose}`} />
              </ListItem>
            </List>
            <ListItemButton onClick={descClick}>
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary="説明" />
              {descOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={descOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText primary={detail[0].desc} />
              </List>
            </Collapse>

            <ListItemButton onClick={commentClick}>
              <ListItemIcon>
                <SpeakerNotesIcon />
              </ListItemIcon>
              <ListItemText primary="コメント" />
              {commentOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={commentOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText primary={detail[0].desc} />
              </List>
            </Collapse>
          </div>
        </div>
      </Resizable>
    </div>
  );
};

export default InfoArea;
