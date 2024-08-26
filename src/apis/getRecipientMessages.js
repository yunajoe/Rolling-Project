import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

/**
 * 특정 수신자의 메시지 목록을 가져오는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} params.recipientId - 메시지 목록을 가져올 수신자의 고유 식별자
 * @param {string} [params.limit="0"] - 가져올 메시지의 최대 개수 (기본값: "0" - 모든 메시지 가져옴)
 * @param {string} [params.offset="0"] - 가져올 메시지 목록의 시작 위치 (기본값: "0" - 처음부터 시작)
 * @returns {Promise} - GET 요청의 비동기 Promise
 */
const getRecipientMessages = async ({ recipientId, limit = 0, offset = 0 }) => {
  const endpoint = apiConfig.endpoints.recipients.messagesList(recipientId);

  const query = `?limit=${limit}&offset=${offset}`;

  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await requestAPI({ endpoint: `${endpoint}${query}`, option });
};

export default getRecipientMessages;
