// import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

const BASE_URL = apiConfig.baseUrl;
/**
 * 특정 수신자를 삭제하는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} params.id - 삭제할 수신자의 고유 식별자
 * @returns {Promise} - 삭제 요청의 비동기 Promise
 */
const deleteRecipient = async ({ id }) => {
  const endpoint = apiConfig.endpoints.recipients.delete(id);
  const option = {
    method: "DELETE",
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, option);
  return { response };
};

export default deleteRecipient;
