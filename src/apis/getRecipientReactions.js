import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

/**
 * 특정 수신자의 반응 목록을 가져오는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} params.recipientId - 반응 목록을 가져올 수신자의 고유 식별자
 * @param {string} [params.limit="8"] - 가져올 반응의 최대 개수 (기본값: "8")
 * @returns {Promise} - GET 요청의 비동기 Promise
 */
const getRecipientReactions = async ({ recipientId, limit = "8" }) => {
  const endpoint = apiConfig.endpoints.recipients.reactionsList(recipientId);

  const query = `?limit=${limit}`;

  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await requestAPI({ endpoint: `${endpoint}${query}`, option });
};

export default getRecipientReactions;
