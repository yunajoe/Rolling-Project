import requestAPI from "./api";
import { TEAM, apiConfig } from "./apiConfig";

/**
 * 새 수신자를 생성하는 전송하는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} params.name - 수신자의 이름 (maxLength: 40, minLength: 1)
 * @param {string} params.backgroundColor - 수신자의 배경색 ((기본값 : beige), purple, blue, green)
 * @param {string} params.backgroundImageURL - 수신자의 배경 이미지 URL (maxLength: 200, minLength: 1)
 * @returns {Promise} - POST 요청의 비동기 Promise
 */
const postRecipientCreate = async ({
  name,
  backgroundColor = "beige",
  backgroundImageURL,
}) => {
  const endpoint = apiConfig.endpoints.recipients.create;

  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      team: TEAM,
      name,
      backgroundColor,
      backgroundImageURL,
    }),
  };

  return await requestAPI({ endpoint, option });
};

export default postRecipientCreate;
