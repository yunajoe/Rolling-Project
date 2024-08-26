import pageNotFoundGif from "../assets/images/etc/page-not-found.gif";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import style from "./NoPage.module.css";
const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.root}>
      <img src={pageNotFoundGif} alt="404" className={style.img} />
      <Button
        className={style.button}
        color="primary"
        size="56"
        onClick={() => navigate("/")}
      >
        홈페이지로 돌아가기
      </Button>
    </div>
  );
};

export default NoPage;
