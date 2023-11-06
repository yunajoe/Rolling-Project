import React from "react";
import { ConvertDateFormat } from "../../../utils/mapProfileData";
import style from "./CardDate.module.css";
export const CardDate = ({ createdAt }) => {
  const convertedDate = ConvertDateFormat(createdAt);
  const { year, month, day } = convertedDate;
  return (
    <div className={style.container}>
      {year}. {month}. {day}
    </div>
  );
};
