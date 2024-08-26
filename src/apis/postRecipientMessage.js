import requestAPI from "./api";
import { TEAM, apiConfig } from "./apiConfig";

/**
 * 특정 수신자에게 새 메시지를 전송하는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} params.recipientId - 메시지를 보낼 수신자의 고유 식별자
 * @param {string} params.sender - 메시지를 보내는 사용자의 정보 (maxLength: 40, minLength: 1)
 * @param {string} params.profileImageURL - 보내는 사용자의 프로필 이미지 URL (maxLength: 200, minLength: 1)
 * @param {string} params.relationship - 보내는 사용자와 수신자 간의 관계 정보 ((기본값 : 친구), 지인, 동료, 가족)
 * @param {string} params.content - 전송할 메시지 내용 (minLength: 1)
 * @param {string} params.font - 메시지의 폰트 정보 ((기본값 : Noto Sans), Pretendard, 나눔명조, 나눔손글씨 손편지체)
 * @returns {Promise} - POST 요청의 비동기 Promise
 */
const postRecipientMessage = async ({
  recipientId,
  sender,
  profileImageURL,
  relationship = "친구",
  content,
  font = "Noto Sans",
}) => {
  const endpoint = apiConfig.endpoints.recipients.messagesCreate(recipientId);

  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      team: TEAM,
      recipientId,
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    }),
  };

  return await requestAPI({ endpoint, option });
};

export default postRecipientMessage;
