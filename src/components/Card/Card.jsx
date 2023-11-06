import style from "./Card.module.css";

export const Card = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
