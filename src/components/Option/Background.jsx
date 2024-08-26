import styles from "./Background.module.css";
import checkIcon from "../../assets/images/icons/checkIcon.svg";

const Background = ({ option, selectedBackground, set }) => {
  const handleClickBackground = (background) => {
    set(background);
  };

  return (
    <div className={styles.container}>
      {option.map((background) => (
        <div
          key={background}
          onClick={() => handleClickBackground(background)}
          className={`${styles.backgroundBox} ${styles[background]}`}
          style={{ backgroundImage: `url(${background})` }}
        >
          {selectedBackground === background && (
            <img src={checkIcon} alt={checkIcon} className={styles.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Background;
