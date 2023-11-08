import style from "./CardContent.module.css";

const CardContent = ({ content }) => {
  return <div className={style.container}>{content}</div>;
};

export default CardContent;
