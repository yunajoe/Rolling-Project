import styles from "./Input.module.css";

const Input = ({ placeholder = "Placeholder", errorMessage, ...props }) => {
  return (
    <div
      className={`${styles.inputContainer} ${errorMessage ? styles.error : ""}`}
    >
      <input className={styles.input} placeholder={placeholder} {...props} />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
