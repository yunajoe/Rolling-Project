import BadgeRelation from "../BadgeRelation/BadgeRelation";
import style from "./CardModal.module.css";

const CardModal = ({ item, createdAt }) => {
  const { profileImageURL, sender, relationship, content } = item;

  return (
    <div className={style.root}>
      <div className={style.header}>
        <div className={style.profileContainer}>
          <img src={profileImageURL} alt="프로필 이미지" />
          <div className={style.profile}>
            <h1 className={style.sender}>
              From. <span>{sender}</span>
            </h1>
            <BadgeRelation type={relationship} />
          </div>
        </div>
        <p className={style.createdAt}>{createdAt}</p>
      </div>
      <div className={style.content}>{content}</div>
    </div>
  );
};

export default CardModal;
