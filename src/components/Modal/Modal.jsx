import style from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>{children}</div>
    </div>
  );
};
export default Modal;
