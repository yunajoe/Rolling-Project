import BadgeRelation from "../../BadgeRelation/BadgeRelation";
import style from "./CardProfile.module.css";

const CardProfile = ({ sender, relationship }) => {
  return (
    <div className={style.container}>
      <p className={style.profile__name}>FROM. {sender}</p>
      <BadgeRelation type={relationship} />
    </div>
  );
};

export default CardProfile;
