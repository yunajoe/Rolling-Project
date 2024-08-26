import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postRecipientCreate from "../apis/postRecipientCreate";
import postRecipientMessage from "../apis/postRecipientMessage";

const useAuth = () => {
  // 일단 선언하면서 ID가 있는지 없는지 확인
  const savedID = "ID";
  const getItem = localStorage.getItem(savedID);

  const [value, setValue] = useState(getItem);

  const { id } = useParams();

  const navigate = useNavigate();

  // 지금 로그인이 되어있는지 확인해야할 때
  const isAuth = () => {
    if (value) return true;
  };

  // 공통적으로 다 post/id로 보내주는 거 같음
  const navigateToPostID = (id) => {
    navigate(`/post/${id}`);
  };

  // 이미 페이지가 있다면 새로운 페이지 생성 못하게 리다이렉트
  const redirectTo = () => {
    if (isAuth()) {
      navigateToPostID(value);
    }
  };

  // 내 페이지에서 나에게 메세지 못 보내도록 리다이렉트
  const redirectFrom = () => {
    if (value === id) {
      navigateToPostID(value);
    }
  };

  // 롤링 페이퍼 만드는 시도
  const tryLogin = async (dataset) => {
    const { response, result } = await postRecipientCreate(dataset);

    if (response.ok) {
      localStorage.setItem(savedID, result.id);
      setValue(result.id);
      navigateToPostID(result.id);
    }
  };

  // 롤링 페이퍼에 메세지 남기는 시도
  const tryMessage = async (dataset) => {
    const { response } = await postRecipientMessage(dataset);
    if (response.ok) {
      navigateToPostID(id);
    }
  };

  return {
    id, // useParams
    value, // state
    setValue, // setState
    isAuth,
    redirectTo,
    redirectFrom,
    tryLogin,
    tryMessage,
  };
};

export default useAuth;
