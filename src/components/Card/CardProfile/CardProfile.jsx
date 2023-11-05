import React from "react";
import style from "./Profile.module.css";

export const CardProfile = ({ sender, relationship }) => {
  return (
    <div>
      <p className={style.profile__name}>FROM. {sender}</p>
      <p className={style.profile__relationship}>{relationship}</p>
    </div>
  );
};
