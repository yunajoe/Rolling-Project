import CardListItem from "./CardListItem";

const CardListItemContainer = ({
  recipientId,
  recipientName,
  backgroundColor,
  backgroundImageURL,
  messageCount,
  profileImageURLs,
  emojiData,
}) => {
  const hasBackgroundImage = !!backgroundImageURL;

  const backgroundImageStyle = backgroundImageURL
    ? {
        backgroundImage: `url(${backgroundImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : null;

  return (
    <CardListItem
      recipientId={recipientId}
      backgroundImageStyle={backgroundImageStyle}
      hasBackgroundImage={hasBackgroundImage}
      recipientName={recipientName}
      backgroundColor={backgroundColor}
      backgroundImageURL={backgroundImageURL}
      messageCount={messageCount}
      profileImageURLs={profileImageURLs}
      emojiData={emojiData}
    />
  );
};

export default CardListItemContainer;
