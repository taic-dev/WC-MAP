import React from 'react'
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AccessibleIcon from "@mui/icons-material/Accessible";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

function IconList({ marker }) {
  return (
    <ul className="common__icon">
    { marker.cleanliness == "非常に綺麗" && <li><AutoAwesomeIcon style={{ color: "#ffd700", width: "15px" }} /></li> }
    { marker.price == "有料" && <li><CurrencyYenIcon style={{ width: "15px" }} /></li> }
    { marker.is_washlet == 1 && <li><FontAwesomeIcon icon={faDroplet} style={{ color : '#1E90FF' }} /></li> }
    { marker.is_multi_purpose_room == 1 && <li><AccessibleIcon style={{ color: '#008000', width: "20px" }} /></li> }
  </ul>
  )
}

export default IconList
