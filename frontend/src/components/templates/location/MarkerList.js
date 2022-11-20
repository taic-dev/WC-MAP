import { Rating } from "@mui/material";
import { InfoWindow, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import InfoArea from "../../pages/location/InfoArea";

const MarkerList = ({ setInfoArea }) => {
  const [activeMarker, setActiveMarker] = useState(false);

  const getMarkerInfo = [
    {
      id: 1,
      name: "トイレ1",
      review: 4,
      location: {
        lat: 35.69731,
        lng: 139.7747,
      },
      images: [
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
      ],
      detail: [
        {
          price: "無料",
          clean: "非常に綺麗",
          time: "10:00~22:00",
          num: "2",
          type: "洋式",
          water: "あり",
          babyChangingStation: "あり",
          multipurpose: "あり",
          desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
      ],
    },
    {
      id: 2,
      name: "トイレ2",
      review: 4,
      location: {
        lat: 35.69575,
        lng: 139.77521,
      },
      images: [
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
      ],
      detail: [
        {
          price: "無料",
          clean: "非常に綺麗",
          time: "10:00~22:00",
          num: "2",
          type: "洋式",
          water: "あり",
          babyChangingStation: "あり",
          multipurpose: "あり",
          desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
      ],
    },
    {
      id: 3,
      name: "トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3トイレ3",
      review: 3,
      location: {
        lat: 33.8315492,
        lng: 132.754934,
      },
      images: [
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
      ],
      detail: [
        {
          price: "無料",
          clean: "非常に綺麗",
          time: "10:00~22:00",
          num: "2",
          type: "和式",
          water: "あり",
          babyChangingStation: "あり",
          multipurpose: "あり",
          desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
      ],
    },
    {
      id: 4,
      name: "スターバックスコーヒー 松山市駅前店",
      review: 5,
      location: {
        lat: 33.8356102,
        lng: 132.7640894,
      },
      images: [
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
        {
          src: "https://myportfoliomain43061.gatsbyjs.io/static/demo-f39ac88109925949b929d6d8327a4632.png",
        },
      ],
      detail: [
        {
          price: "有料",
          clean: "非常に綺麗",
          time: "10:00~21:00",
          num: "1",
          type: "洋式",
          water: "あり",
          babyChangingStation: "なし",
          multipurpose: "なし",
          desc: "さすがのスターバックス！！いつも清潔に保たれています。",
        },
      ],
    },
  ];

  const handleActiveMarker = (id) => {
    setActiveMarker(id);
  };

  return (
    <>
      {getMarkerInfo.map((getMarker) => (
        <>
          <Marker
            key={getMarker.name}
            position={getMarker.location}
            onClick={() => handleActiveMarker(getMarker.id)}
          />

          {activeMarker === getMarker.id ? (
            <>
              <InfoWindow
                position={getMarker.location}
                onCloseClick={() => setActiveMarker(false)}
              >
                <div>
                  <h1>{getMarker.name}</h1>
                  <div className="info-window__review">
                    <span>{getMarker.review}</span>
                    <Rating
                      name="read-only"
                      value={getMarker.review}
                      size="small"
                      readOnly
                    />
                    <span>(21)</span>
                  </div>
                </div>
              </InfoWindow>

              <InfoArea
                name={getMarker.name}
                review={getMarker.review}
                location={getMarker.location}
                images={getMarker.images}
                detail={getMarker.detail}
                handleActiveMarker={handleActiveMarker}
              />
            </>
          ) : null}
        </>
      ))}
    </>
  );
};

export default MarkerList;
