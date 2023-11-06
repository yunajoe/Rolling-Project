import React from "react";
import style from "./CardProfileImage.module.css";
export const CardProfileImage = ({ profileImageURL }) => {
  return (
    <img
      className={style.profile__image}
      src={profileImageURL}
      alt="profileImage"
    />
  );
};
