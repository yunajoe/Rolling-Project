import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Input from "../components/TextField/Input";
import styles from "./CreateFrom.module.css";
import MarkDown from "../components/TextField/MarkDown";
import Dropdown from "../components/TextField/Dropdown";
import Button from "../components/Button/Button";
import ProfileImageFileInput from "../components/ProfileImageFileInput/ProfileImageFileInput";
import { useAsync } from "../hooks/useAsync";
import getProfileImages from "../apis/getProfileImages";
import useAuth from "../hooks/useAuth";
import useInput from "../hooks/useInput";
import useDropdown from "../hooks/useDropdown";

const CreateFrom = () => {
  const {
    data: { imageUrls },
  } = useAsync(getProfileImages);

  const markDownInput = useInput({});

  const inputFrom = useInput({
    errorText: "이름은 비워둘 수 없습니다",
  });

  const auth = useAuth();

  const font = useDropdown({
    init: "Noto Sans",
    arr: ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"],
  });

  const relation = useDropdown({
    init: "지인",
    arr: ["가족", "친구", "동료", "지인"],
  });

  const [imgValue, setImgValue] = useState();

  useEffect(() => {
    auth.redirectFrom();
    if (imageUrls) {
      setImgValue(imageUrls[0]);
    }
  }, [imageUrls]);

  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataset = {
      recipientId: auth.id,
      sender: inputFrom.value,
      profileImageURL: imgValue,
      relationship: relation.value,
      content: markDownInput.value,
      font: font.value,
    };

    try {
      setIsloading(true);
      await auth.tryMessage(dataset);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <>
      <Header isNotMobileVisible={true} />

      <div className={styles.root}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label>
              <h2 className={styles.title}>From.</h2>
            </label>
            <Input
              placeholder="이름을 입력해 주세요"
              onBlur={inputFrom.handleBlur}
              onFocus={inputFrom.handleFocus}
              onChange={inputFrom.handleChange}
              errorMessage={inputFrom.errorMessage}
              value={inputFrom.value}
            ></Input>
          </div>
          <div>
            <h2 className={styles.title}>프로필 이미지</h2>
            <ProfileImageFileInput
              imageUrls={imageUrls}
              value={imgValue}
              setValue={setImgValue}
            />
          </div>
          <div>
            <h2 className={styles.title}>상대와의 관계</h2>
            <Dropdown option={relation} />
          </div>
          <div>
            <h2 className={styles.title}>내용을 입력해 주세요</h2>
            <MarkDown setter={markDownInput.setValue} />
          </div>
          <div>
            <h2 className={styles.title}>폰트 선택</h2>
            <Dropdown option={font} />
          </div>
          <Button
            disabled={isLoading || !inputFrom.value || !markDownInput.value}
            shape="block"
            color="primary"
            size="56"
          >
            생성하기
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateFrom;
