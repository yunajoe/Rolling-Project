import style from "./CardDate.module.css";
import { convertDateFormat } from "../../../utils/convertDateFormat";

const CardDate = ({ createdAt }) => {
  const convertedDate = convertDateFormat(createdAt);
  const { year, month, day } = convertedDate;
  return (
    <div className={style.container}>
      {year}. {month}. {day}
    </div>
  );
};

export default CardDate;
