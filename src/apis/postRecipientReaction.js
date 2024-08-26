import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

/**
 * 수신자에게 반응을 추가하는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} params.recipientId - 반응을 추가할 수신자의 고유 식별자
 * @param {string} params.emoji - 추가할 반응의 이모지 (minLength: 1)
 * @param {string} [params.type="increase"] - 반응의 유형 ((기본값 : "increase"), "decrease")
 * @returns {Promise} - POST 요청의 비동기 Promise
 */
const postRecipientReaction = async ({
  recipientId,
  emoji,
  type = "increase",
}) => {
  const endpoint = apiConfig.endpoints.recipients.reactionsCreate(recipientId);

  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emoji,
      type,
    }),
  };

  return await requestAPI({ endpoint, option });
};

export default postRecipientReaction;
