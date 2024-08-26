import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import style from "./LandingPage.module.css";
import point1 from "../assets/images/etc/point1.svg";
import point2 from "../assets/images/etc/point2.svg";
const LandingPage = () => {
  const headerButton = (
    <Button as="Link" to="/post" color="outlined" size="40">
      {localStorage.getItem("ID") ? "나의 롤링 페이퍼" : "롤링 페이퍼 만들기"}
    </Button>
  );

  return (
    <>
      <Header button={headerButton}></Header>
      <div className={style.container}>
        <div className={style.box1}>
          <div className={style.frame}>
            <img src={point1} alt="point1" />
            <div className={style.title}>
              <p>
                누구나 손쉽게, 온라인
                <br className={style.linebreak} />
                롤링 페이퍼를 만들 수 있어요
              </p>
            </div>
            <p className={style.description}>로그인 없이 자유롭게 만들어요</p>
          </div>
          <div className={style.frameImage1}></div>
        </div>
        <div className={style.box2}>
          <div className={style.frameImage2}></div>
          <div className={style.frame}>
            <img src={point2} alt="point2" />
            <div className={style.title}>
              <p>
                서로에게 이모지로 감정을
                <br className={style.linebreak} />
                표현해보세요
              </p>
            </div>
            <p className={style.description}>
              롤링 페이퍼에 이모지를 추가할 수 있어요
            </p>
          </div>
        </div>
        <Button
          as="Link"
          to="/list"
          className={style.button}
          color="primary"
          size="56"
        >
          구경해보기
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
