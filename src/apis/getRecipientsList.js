import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

/**
 * 수신자 목록을 가져오는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} [params.limit="0"] - 가져올 수신자의 최대 개수 (기본값: "0" - 모든 수신자 가져옴)
 * @param {string} [params.offset="0"] - 가져올 수신자 목록의 시작 위치 (기본값: "0" - 처음부터 시작)
 * @returns {Promise} - GET 요청의 비동기 Promise
 */
const getRecipientsList = async ({ limit = "0", offset = "0" }) => {
  const endpoint = apiConfig.endpoints.recipients.list;

  const query = `?limit=${limit}&offset=${offset}`;

  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await requestAPI({ endpoint: `${endpoint}${query}`, option });
};

export default getRecipientsList;
