import React, { useState } from "react";
import "./index.css";
export const CardImage = ({ item, index }) => {
  const [showHandle, setShowHandle] = useState(false);
  const onClickBox = () => {
    setShowHandle(!showHandle);
  };
  return (
    <div
      onClick={onClickBox}
      key={index}
      className={`box${index + 1} imgbox`}
      style={{
        backgroundImage: `url(${item.img})`,
        height: "450px",
      }}
    >
      <div className={`box-title ${showHandle ? "box-title-click" : ""} `}>
        <p className="text-galata">{item.title}</p>
        <button className="box-btn">Read More</button>
      </div>
    </div>
  );
};
