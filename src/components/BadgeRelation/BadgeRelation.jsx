import clsx from "clsx";
import style from "./BadgeRelation.module.css";

const BADGE_TYPE = {
  지인: { color: "orange" },
  동료: { color: "purple" },
  가족: { color: "green" },
  친구: { color: "blue" },
};

const BadgeRelation = ({ type }) => {
  return (
    <div>
      <div
        className={clsx(style.root, {
          [style.orange]: BADGE_TYPE[type].color === "orange",
          [style.purple]: BADGE_TYPE[type].color === "purple",
          [style.green]: BADGE_TYPE[type].color === "green",
          [style.blue]: BADGE_TYPE[type].color === "blue",
        })}
      >
        {type}
      </div>
    </div>
  );
};

export default BadgeRelation;
