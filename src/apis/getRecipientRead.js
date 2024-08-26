import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

/**
 * 특정 수신자의 정보를 조회하는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} params.id - 조회할 수신자의 고유 식별자
 * @returns {Promise} - GET 요청의 비동기 Promise
 */
const getRecipientRead = async ({ id }) => {
  const endpoint = apiConfig.endpoints.recipients.read(id);

  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await requestAPI({ endpoint: `${endpoint}`, option });
};

export default getRecipientRead;
