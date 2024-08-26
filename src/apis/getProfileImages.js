import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

/**
 * 프로필 이미지 목록을 가져오는 비동기 함수
 * @async
 * @returns {Promise} - GET 요청의 비동기 Promise
 */
const getProfileImages = async () => {
  const endpoint = apiConfig.endpoints.profileImages.list;

  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await requestAPI({ endpoint: `${endpoint}`, option });
};

export default getProfileImages;
