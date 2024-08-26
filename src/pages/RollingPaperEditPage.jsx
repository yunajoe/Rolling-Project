import { useEffect } from "react";
import {
  useParams,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderService from "../components/HeaderService/HeaderService";
import getRecipientRead from "../apis/getRecipientRead";
import { useAsync } from "../hooks/useAsync";
import style from "./RollingPaperPage.module.css";
import clsx from "clsx";
import Cards from "../components/Cards/Cards";
import Button from "../components/Button/Button";
import deleteRecipient from "../apis/deleteRecipient";
import LocaleContext from "../contexts/LocaleContext";
import useWindowWidthCheck from "../hooks/useWindowWidthCheck";

const RollingPaperEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const authId = localStorage.getItem("ID");
  const currentLocation = useLocation();
  const redirectLocation = currentLocation.pathname.split("edit")[0];
  const isMobile = useWindowWidthCheck(767);

  useEffect(() => {
    if (authId !== id) {
      navigate(redirectLocation);
      alert("편집 권한이 없습니다.");
    }
  }, []);

  const { loading, data } = useAsync(getRecipientRead, { id });
  const {
    name,
    messageCount,
    recentMessages,
    backgroundColor,
    backgroundImageURL,
  } = data;

  const handleDeletePage = async () => {
    // 삭제 확인
    if (!window.confirm("페이지를 삭제하시겠습니까?")) {
      return;
    }

    try {
      // 서버에 삭제 요청
      await deleteRecipient({ id: id });

      // 삭제 성공 메시지 출력
      console.log("페이지가 삭제되었습니다..");

      localStorage.removeItem("ID");
      // LandingPage로 이동
      navigate("/");
    } catch (error) {
      // 삭제 실패 메시지 출력
      console.error("페이지를 삭제하는 데 실패했습니다.", error);
    }
  };

  const recentProfileImg = recentMessages
    ? recentMessages.map((value) => value.profileImageURL)
    : [
        "example/profileImage01.png",
        "example/profileImage02.png",
        "example/profileImage03.png",
      ];

  const background = backgroundImageURL
    ? { backgroundImage: `url(${backgroundImageURL})` }
    : {};

  if (loading) return <div>loading</div>;
  if (data == false) {
    return <Navigate to="/" />;
  }
  return (
    <LocaleContext.Provider value={{ id: id, name: name }}>
      <div className={style.root}>
        <Header isNotMobileVisible={isMobile} />
        <HeaderService
          recipientId={id}
          recipientName={name}
          messageCount={messageCount}
          profileImageURLs={recentProfileImg}
        />
        <div
          className={clsx(style.cardSection, {
            [style[backgroundColor]]: !backgroundImageURL,
          })}
          style={background}
        >
          <div className={style.buttonContainer}>
            <Button className={style.deleteButton} onClick={handleDeletePage}>
              삭제하기
            </Button>
          </div>
          <Cards />
        </div>
      </div>
    </LocaleContext.Provider>
  );
};

export default RollingPaperEditPage;
