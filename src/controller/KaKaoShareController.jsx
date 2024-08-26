import Button from "../components/Button/Button";
import styles from "../components/HeaderService/HeaderService.module.css";

const KaKaoshareController = ({ children, onClick }) => {
  return (
    <>
      <div className={styles.sharePopoverButton}>
        <Button onMouseDown={onClick}>{children}</Button>
      </div>
    </>
  );
};

export default KaKaoshareController;
