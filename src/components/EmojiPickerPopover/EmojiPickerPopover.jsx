import EmojiPicker from "emoji-picker-react";

import styles from "./EmojiPickerPopover.module.css";
import { useEffect } from "react";

/**
 * EmojiPickerPopover 컴포넌트는 이모지 선택 팝오버를 렌더링합니다.
 *
 * @param {boolean} isEmojiPopoverOpen - 이모지 팝오버가 열려있는지 여부를 나타내는 부울 값.
 * @param {Function} onButtonClick - 버튼 클릭 이벤트 핸들러 함수.
 * @param {Function} onEmojiClick - 이모지 클릭 이벤트 핸들러 함수.
 * @param {JSX.Element} buttonElement - 버튼 엘리먼트.
 *
 * @returns {JSX.Element} EmojiPickerPopover 컴포넌트를 반환합니다.
 */
const EmojiPickerPopover = ({
  myRef,
  isEmojiPopoverOpen,
  setEmojiPopoverOpen,
  onEmojiClick,
  buttonElement,
}) => {
  useEffect(() => {
    const clickFunc = (e) => {
      if (myRef.current && !myRef.current.contains(e.target)) {
        setEmojiPopoverOpen(false);
      }
    };
    document.addEventListener("click", clickFunc);
    return () => {
      document.removeEventListener("click", clickFunc);
    };
  }, [myRef.current]);

  return (
    <div className={styles.emojiPickerPopover} ref={myRef}>
      {buttonElement}
      {isEmojiPopoverOpen && (
        <div className={styles.emojiPopover}>
          <EmojiPicker onEmojiClick={onEmojiClick} width={306} height={392} />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopover;
