import styles from "./CardList.module.css";

import Button from "../Button/Button";
import CardListItemContainer from "./CardListItemContainer";

const CardList = ({
  data,
  containerRef,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onMouseOver,
  onNextSlide,
  onPrevSlide,
  currentIndex,
}) => {
  return (
    <div className={styles.cardListContainer}>
      <div
        onMouseOver={onMouseOver}
        className={styles.cardListWrapper}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ul className={styles.cardList} ref={containerRef}>
          {data.map(
            ({
              id,
              name,
              backgroundColor,
              backgroundImageURL,
              messageCount,
              recentMessages,
              topReactions,
            }) => {
              const profileImageURLs = recentMessages.map(
                (message) => message.profileImageURL,
              );

              return (
                <li key={id}>
                  <CardListItemContainer
                    recipientId={id}
                    recipientName={name}
                    backgroundColor={backgroundColor}
                    backgroundImageURL={backgroundImageURL}
                    messageCount={messageCount}
                    profileImageURLs={profileImageURLs}
                    emojiData={topReactions}
                  />
                </li>
              );
            },
          )}
        </ul>
      </div>
      {data.length > 3.9 && (
        <div className={styles.navigationButtons}>
          {currentIndex !== 0 && (
            <div className={styles.previousButton}>
              <Button
                shape={"arrow"}
                direction={"left"}
                onClick={onPrevSlide}
              />
            </div>
          )}
          {currentIndex !== data.length - 3.9 &&
            currentIndex !== data.length - 4 && (
              <div className={styles.nextButton}>
                <Button
                  shape={"arrow"}
                  direction={"right"}
                  onClick={onNextSlide}
                />
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default CardList;
