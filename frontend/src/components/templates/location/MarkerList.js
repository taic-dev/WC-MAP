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
        }
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
        }
      ],
    },
    {
      price: "無料",
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
        }
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
                </div>
              </InfoWindow>

              <InfoArea
                id={getMarker.id}
                name={getMarker.name}
                review={getMarker.review}
                location={getMarker.location}
                images={getMarker.images}
                detail={getMarker.detail}
              />
            </>
          ) : null}
        </>
      ))}
    </>
  );
};

export default MarkerList;
