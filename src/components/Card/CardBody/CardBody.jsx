import Card from "../Card";
import CardProfileImage from "../CardImage/CardProfileImage";
import CardProfile from "../CardProfile/CardProfile";
import CardContent from "../CardContent/CardContent";
import CardDate from "../CardDate/CardDate";
import Modal from "../../Modal/Modal";
import CardModal from "../../Modal/CardModal";
import Button from "../../Button/Button";
import style from "./CardBody.module.css";
import bin from "../../../assets/images/icons/bin.svg";
import { useLocation } from "react-router-dom";
import { useModal } from "../../../hooks/useModal";
import { convertDateFormat } from "../../../utils/convertDateFormat";
import deleteMessage from "../../../apis/deleteMessage";

const CardBody = ({ item, setItems }) => {
  const location = useLocation();
  const isEditPage = location.pathname.endsWith("edit");
  const { profileImageURL, sender, relationship, content, createdAt } = item;

  const convertedDate = convertDateFormat(createdAt);
  const { year, month, day } = convertedDate;
  const prettyCreatedAt = `${year}. ${month}. ${day}`;

  const { isModalVisible, openModalFunc, closeModalFunc } = useModal();

  const handleDeleteCard = async (event) => {
    // 이벤트 버블링 방지(모달 말고 삭제 버튼이 클릭되도록)
    event.stopPropagation();

    // 삭제 확인
    if (!window.confirm("카드를 삭제하시겠습니까?")) {
      return;
    }
    try {
      // 서버에 삭제 요청
      await deleteMessage({ id: item.id });

      // 화면에서 카드 삭제
      setItems((prevCards) => prevCards.filter((card) => card.id !== item.id));

      console.log("카드가 삭제되었습니다.");
    } catch (error) {
      console.error("카드를 삭제하는 데 실패했습니다.", error);
    }
  };

  return (
    <>
      <div className={style.root} onClick={openModalFunc}>
        <Card>
          <div className={style.header}>
            <CardProfileImage profileImageURL={profileImageURL} />
            <CardProfile sender={sender} relationship={relationship} />
            {isEditPage && (
              <Button onClick={handleDeleteCard}>
                <img className={style.bin} src={bin} alt="bin" />
              </Button>
            )}
          </div>
          <div className={style.divider}></div>
          <CardContent content={content} />
          <CardDate createdAt={prettyCreatedAt} />
        </Card>
      </div>
      {isModalVisible && (
        <Modal>
          <CardModal item={item} createdAt={prettyCreatedAt} />
          <Button onClick={closeModalFunc} width="12" size="40" color="primary">
            확인
          </Button>
        </Modal>
      )}
    </>
  );
};

export default CardBody;
