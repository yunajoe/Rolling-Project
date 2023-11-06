import React from "react";
import style from "./CardButtonImage.module.css";
import plusbutton from "../../../assets/images/plusbutton.svg";

export const CardButtonImage = () => {
  return (
    <div className={style.container}>
      <img src={plusbutton} alt="plus-button" />;
    </div>
  );
};
