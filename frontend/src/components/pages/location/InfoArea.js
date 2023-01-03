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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

const InfoArea = ({
  marker,
  handleActiveMarker
}) => {
  const [descOpen, setDescOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const GoogleMapURL = "https://www.google.com/maps/dir/?api=1&destination=";

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
            <h1 className="common__font-family">{marker.toilet_name}</h1>
          </div>
          {/* <div className="info-area__review">
            <span>{review}</span>
            <Rating name="read-only" value={review} size="small" readOnly />
            <span>(21)</span>
          </div> */}
          <ul className="info-area__link">
            <li>
              <a href={GoogleMapURL + `${ marker.latitude },${ marker.longitude }`} target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/img/page/google-maps-icons.svg`} alt="GoogleMap" />
                <span>GoogleMapへ</span>
              </a>
            </li>
            <li>
              <a href={`https://twitter.com/share?url=${process.env.REACT_APP_URL}&hashtags=WCMAP,お腹のゆるい人と繋がりたい&text=さぁ、近場のトイレを探そう！｜全国のトイレを検索できるW.C.MAP`} 
                rel="nofollow" 
                target="_blank"
                >
                <img src={`${process.env.PUBLIC_URL}/img/page/twitter.svg`} alt="GoogleMap" />
                <span>シェアする</span>
              </a>
            </li>
          </ul>
          <ul className="info-area__img">
            { marker.toilet_image.length != 0 ? (
              marker.toilet_image.map((image) => (
                <li key={image.id}>
                  <img src={image.image_url} alt="画像" />
                </li>
              ))
            ) : (
                <li key="1">
                  <img src={`${process.env.PUBLIC_URL}/img/page/no-image.png`} alt="画像なし" />
                </li>
            ) }
          </ul>
          <div className="info-area__detail">
            <List>
              <ListItem>
                <ListItemIcon>
                  <CurrencyYenIcon />
                </ListItemIcon>
                <ListItemText primary={marker.price} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon />
                </ListItemIcon>
                <ListItemText primary={marker.cleanliness} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faToiletsPortable} />
                </ListItemIcon>
                <ListItemText primary={`${ marker.private_room_num }室`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FontAwesomeIcon style={{ width: "20px" }} icon={faToilet} />
                </ListItemIcon>
                <ListItemText primary={ marker.private_room_type } />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FontAwesomeIcon style={{ width: "20px" }} icon={faDroplet} />
                </ListItemIcon>
                <ListItemText primary={ `ウオシュレット ${ marker.is_washlet == 0 ? 'なし' : 'あり'}` } />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessibleIcon />
                </ListItemIcon>
                <ListItemText primary={`多目的室 ${ marker.is_multi_purpose_room == 0 ? 'なし' : 'あり' }`} />
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
                <ListItemText primary={ marker.description } />
              </List>
            </Collapse>

            {/* <ListItemButton onClick={commentClick}>
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
            </Collapse> */}

          </div>
        </div>
      </Resizable>
    </div>
  );
};

export default InfoArea;
