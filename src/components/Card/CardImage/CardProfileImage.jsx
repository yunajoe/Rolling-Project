import style from "./CardProfileImage.module.css";

const CardProfileImage = ({ profileImageURL }) => {
  return (
    <img
      className={style.profile__image}
      src={profileImageURL}
      alt="profileImage"
    />
  );
};

export default CardProfileImage;
