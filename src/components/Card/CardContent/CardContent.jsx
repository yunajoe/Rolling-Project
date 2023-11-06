import React from "react";
import style from "./CardContent.module.css";
export const CardContent = ({ content }) => {
  return <div className={style.container}>{content}</div>;
};
