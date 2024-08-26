import { useEffect, useRef, useState } from "react";

import styles from "./HeaderService.module.css";

import BadgeEmojiList from "../BadgeEmoji/BadgeEmojiList";
import EmojiPickerPopover from "../EmojiPickerPopover/EmojiPickerPopover";
import RollingPaperInfo from "../RollingPaperInfo/RollingPaperInfo";
import postRecipientReaction from "../../apis/postRecipientReaction";
import getRecipientReactions from "./../../apis/getRecipientReactions";
import shareImage from "../../assets/images/icons/shareIcon.svg";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Button from "../Button/Button";
import EmojiAddImage from "../../assets/images/icons/imojiAddIcon.svg";
import Toast from "../Toast/Toast";
import { useToast } from "../../hooks/useToast";
import { useKaKao } from "../../hooks/useKaKao";
import KaKaoshareController from "../../controller/KaKaoShareController";
import { copyClipBoard } from "../../utils/copyToClipboard";
import useWindowWidthCheck from "./../../hooks/useWindowWidthCheck";

/**
 * 수신자 정보와 관련된 헤더 서비스 컴포넌트.
 * @param {Object} props - 컴포넌트에 전달되는 속성(props) 객체.
 * @param {string} props.recipientId - 수신자의 고유 식별자.
 * @param {string} props.recipientName - 수신자의 이름.
 * @param {number} props.writerCount - 작성자 수.
 * @param {string[]} props.profileImageURLs - 프로필 이미지 URL 목록. (예시: ["example/profileImage01.png", "example/profileImage02.png", "example/profileImage03.png"])
 * @returns {JSX.Element} - 헤더 서비스 컴포넌트의 JSX 엘리먼트.
 */
const HeaderService = ({
  recipientId,
  recipientName,
  messageCount,
  profileImageURLs,
}) => {
  const [emojiData, setEmojiData] = useState([]);
  const [isSharePopover, setSharePopover] = useState(false);
  const [isEmojiPopoverOpen, setEmojiPopoverOpen] = useState(false);
  const { isToastPop, openToast, closeToast } = useToast();
  const isMobile = useWindowWidthCheck(767);
  const myRef = useRef();
  const handleButtonClick = () => {
    setEmojiPopoverOpen(!isEmojiPopoverOpen);
  };

  const handlePasteClick = () => {
    openToast();
    copyClipBoard(window.location.href);
  };

  const updateEmojiData = async () => {
    try {
      const response = await getRecipientReactions({ recipientId, limit: "8" });

      if (response.result.results) {
        setEmojiData(() =>
          response.result.results.map((value) => ({
            emoji: value.emoji,
            count: value.count,
          })),
        );
      }
    } catch (error) {
      console.error("Error updating emoji data:", error);
    }
  };

  const shareKakao = useKaKao();
  const handleEmojiClick = async (emoji) => {
    try {
      await postRecipientReaction({ recipientId, emoji: emoji.emoji });
      updateEmojiData();
    } catch (error) {
      console.error("Error posting emoji:", error);
    }
  };

  const handleShareClick = () => {
    setSharePopover(!isSharePopover);
  };

  const handleShareBlur = () => {
    setSharePopover(false);
  };

  useEffect(() => {
    updateEmojiData();
  }, []);

  return (
    <div className={styles.headerService}>
      <div className={styles.container}>
        <div className={styles.rollingPaperInfocontainer}>
          <RollingPaperInfo recipientName={recipientName}>
            <ProfileInfo
              messageCount={messageCount}
              profileImageURLs={profileImageURLs}
            />
          </RollingPaperInfo>
        </div>
        <div className={styles.utilsConainer}>
          <div className={styles.verticalLineWrapper}>
            <div className={styles.verticalLine} />
          </div>
          <BadgeEmojiList emojis={emojiData} />
          <div className={styles.buttonsContainer}>
            <EmojiPickerPopover
              myRef={myRef}
              setEmojiPopoverOpen={setEmojiPopoverOpen}
              isEmojiPopoverOpen={isEmojiPopoverOpen}
              handleButtonClick={handleButtonClick}
              onEmojiClick={handleEmojiClick}
              buttonElement={
                <Button
                  color={"outlined"}
                  size={36}
                  mobile={true}
                  onClick={handleButtonClick}
                >
                  <img src={EmojiAddImage} alt="이모지 추가 이미지" />
                  <span>{isMobile ? "" : "추가"}</span>
                </Button>
              }
            />

            <div className={styles.verticalLine} />
            <div
              className={styles.shareButtonContainer}
              onBlur={handleShareBlur}
            >
              <Button
                color={"outlined"}
                size={36}
                mobile={true}
                onClick={handleShareClick}
              >
                <img src={shareImage} alt="공유 이미지" />
              </Button>
              {isSharePopover && (
                <div className={styles.sharePopover}>
                  <KaKaoshareController onClick={shareKakao}>
                    카카오톡 공유
                  </KaKaoshareController>
                  <button
                    className={styles.sharePopoverButton}
                    onMouseDown={handlePasteClick}
                  >
                    URL 공유
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {isToastPop && <Toast onClick={closeToast}>URL이 복사되었습니다</Toast>}
      </div>
    </div>
  );
};

export default HeaderService;
