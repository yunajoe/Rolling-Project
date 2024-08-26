import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

/**
 * 배경 이미지 목록을 가져오는 비동기 함수
 * @async
 * @returns {Promise} - GET 요청의 비동기 Promise
 */
const getBackgroundImages = async () => {
  const endpoint = apiConfig.endpoints.backgroundImages.list;

  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await requestAPI({ endpoint: `${endpoint}`, option });
};

export default getBackgroundImages;
