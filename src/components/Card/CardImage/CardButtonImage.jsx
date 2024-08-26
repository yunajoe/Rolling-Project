import style from "./CardButtonImage.module.css";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import styles from "../../Button/Button.module.css";

const CardButtonImage = ({ id }) => {
  return (
    <div className={style.container}>
      <Link to={`/post/${id}/message`}>
        <Button className={styles.plus} />
      </Link>
    </div>
  );
};

export default CardButtonImage;
