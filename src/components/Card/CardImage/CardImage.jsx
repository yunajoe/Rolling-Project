import React from "react";
import style from "./CardImage.module.css";
export const CardImage = ({ profileImageURL }) => {
  return (
    <img
      className={style.profile__image}
      src={profileImageURL}
      alt="profileImage"
    />
  );
};
