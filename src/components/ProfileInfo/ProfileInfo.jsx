import { clsx } from "clsx";

import styles from "./ProfileInfo.module.css";

/**
 * 프로필 정보를 나타내는 컴포넌트.
 * @param {Object} props - 컴포넌트에 전달되는 속성(props) 객체.
 * @param {number} props.messageCount - 작성된 메시지의 총 개수.
 * @param {string[]} props.profileImageURLs - 프로필 이미지 URL 목록.
 * @returns {JSX.Element} - 프로필 정보 컴포넌트의 JSX 엘리먼트.
 */
const ProfileInfo = ({
  style = "",
  messageCount,
  profileImageURLs,
  hasBackgroundImage = false,
}) => {
  // li 요소에 이미 3명이 표시되었으므로 writerCount에서 3을 뺀 값을 변수에 저장
  const messageCountMinusThree = () =>
    messageCount <= 3 ? 0 : messageCount - 3;

  const containerClassNames = clsx(styles.profileInfoContainer, styles[style]);
  const listContainerClassNames = clsx(
    styles.profileImageListContainer,
    styles[style],
  );
  const listItemClassNames = clsx(styles.profileImageWrapper, styles[style]);
  const descriptionClassNames = clsx(
    styles.description,
    styles[style],
    hasBackgroundImage && styles.white,
  );

  return (
    <div className={containerClassNames}>
      <ul className={listContainerClassNames}>
        {profileImageURLs.slice(0, 3).map((url, index) => (
          <li key={index} className={listItemClassNames}>
            {profileImageURLs.length >= index + 1 &&
              messageCount >= index + 1 && (
                <img
                  className={styles.profileImage}
                  src={url}
                  alt={`프로필 이미지 ${index + 1}`}
                ></img>
              )}
          </li>
        ))}
        <li className={listItemClassNames}>+{messageCountMinusThree()}</li>
      </ul>
      <p className={descriptionClassNames}>
        <span className={styles.accent}>{messageCount}</span>명이 작성했어요!
      </p>
    </div>
  );
};

export default ProfileInfo;
