import { useState } from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = ({ toggle, setToggle, onHandle }) => {
  const [antiToggle, setAntiToggle] = useState(false);
  const handleToggleButtonClick = () => {
    setToggle((curr) => !curr);
    setAntiToggle((curr) => !curr);
    onHandle();
  };

  return (
    <div className={styles.toggleButtonContainer}>
      <button
        className={styles.toggleButton}
        disabled={toggle}
        onClick={handleToggleButtonClick}
      >
        색상
      </button>
      <button
        className={styles.toggleButton}
        disabled={antiToggle}
        onClick={handleToggleButtonClick}
      >
        이미지
      </button>
    </div>
  );
};

export default ToggleButton;
