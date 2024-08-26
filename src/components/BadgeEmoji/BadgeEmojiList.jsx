import { useEffect, useState } from "react";

import styles from "./BadgeEmojiList.module.css";

import BadgeEmoji from "./BadgeEmoji";
import arrowDownImage from "../../assets/images/icons/arrowDownIcon.svg";

/**
 * 뱃지 이모지 목록을 나타내는 컴포넌트.
 * @param {Object} props - 컴포넌트에 전달되는 속성(props) 객체.
 * @param {Object[]} props.emojis - 이모지 데이터의 배열.
 * @returns {JSX.Element} - 뱃지 이모지 목록 컴포넌트의 JSX 엘리먼트.
 */
const BadgeEmojiList = ({ emojis, isVisibleButton = true }) => {
  const [emojiData, setEmojiData] = useState([]);
  const [isButton, setIsButton] = useState(false);

  const handleButtonClick = () => {
    const invaildEmojiData = !emojiData[0].length;
    if (invaildEmojiData) return;

    setIsButton(!isButton);
  };

  const handleEmojiBlur = () => {
    setIsButton(false);
  };

  useEffect(() => {
    setEmojiData([emojis.slice(0, 3), emojis.slice(0, 8)]);
  }, [emojis]);

  return (
    <div className={styles.container}>
      <ul className={styles.badgeEmojiList}>
        {emojiData?.[0]?.map((item) => (
          <li key={item.emoji}>
            <BadgeEmoji emoji={item.emoji} count={item.count} />
          </li>
        ))}
      </ul>
      {isVisibleButton && (
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={handleButtonClick}
            onBlur={handleEmojiBlur}
          >
            <img src={arrowDownImage} alt="arrow down" />
          </button>
          {isButton && (
            <ul className={styles.badgeEmojiListPopover}>
              {emojiData?.[1]?.map((item) => (
                <li key={item.emoji}>
                  <BadgeEmoji emoji={item.emoji} count={item.count} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default BadgeEmojiList;
