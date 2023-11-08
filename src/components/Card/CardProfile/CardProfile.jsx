import style from "./CardProfile.module.css";

const CardProfile = ({ sender, relationship }) => {
  return (
    <div className={style.container}>
      <p className={style.profile__name}>FROM. {sender}</p>
      <span className={style.profile__relationship}>{relationship}</span>
    </div>
  );
};

export default CardProfile;
