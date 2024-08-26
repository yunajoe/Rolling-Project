import style from "./CardDate.module.css";

const CardDate = ({ createdAt }) => {
  return <div className={style.container}>{createdAt}</div>;
};

export default CardDate;
