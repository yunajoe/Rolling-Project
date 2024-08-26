import styles from "./ProfileImageFileInput.module.css";

const ProfileImageFileInput = ({ imageUrls, value, setValue }) => {
  const filtedData = imageUrls?.filter(
    (imageData) =>
      imageData !==
      "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
  );

  const selectedStyle = {
    backgroundImage: `url(${value})`,
  };

  return (
    <div className={styles.root}>
      <div style={selectedStyle} className={styles.selectedImage}></div>

      <div className={styles.container}>
        <p className={styles.subTitle}>프로필 이미지를 선택해주세요!</p>
        <div className={styles.mapContainer}>
          {filtedData?.map((url) => {
            const handleClick = () => {
              setValue(url);
            };

            const imgStyle = {
              backgroundImage: `url(${url})`,
            };
            return (
              <button
                type="button"
                key={url}
                style={imgStyle}
                onClick={handleClick}
                className={styles.imageFileContainer}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileImageFileInput;
