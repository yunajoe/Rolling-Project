import styles from "./BadgeEmoji.module.css";

/**
 * 이모지와 카운트 정보를 나타내는 뱃지 컴포넌트.
 * @param {Object} props - 컴포넌트에 전달되는 속성(props) 객체.
 * @param {string} props.emoji - 표시할 이모지.
 * @param {number} props.count - 이모지의 카운트.
 * @returns {JSX.Element} - 뱃지 컴포넌트의 JSX 엘리먼트.
 */
const BadgeEmoji = ({ emoji, count }) => {
  return (
    <div className={styles.badgeEmoji}>
      {emoji} {count}
    </div>
  );
};

export default BadgeEmoji;
