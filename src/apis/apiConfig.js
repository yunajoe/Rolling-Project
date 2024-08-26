const TEAM = "1-6";

/**
 * API 설정 객체
 * @typedef {Object} apiConfig
 * @property {string} baseUrl - API의 기본 URL
 * @property {object} endpoints - 다양한 엔드포인트 정보
 * @property {object} endpoints.backgroundImages - 배경 이미지 관련 엔드포인트
 * @property {string} endpoints.backgroundImages.list - 배경 이미지 목록을 가져오는 엔드포인트
 * @property {object} endpoints.profileImages - 프로필 이미지 관련 엔드포인트
 * @property {string} endpoints.profileImages.list - 프로필 이미지 목록을 가져오는 엔드포인트
 * @property {object} endpoints.messages - 메시지 관련 엔드포인트
 * @property {function} endpoints.messages.delete - 메시지를 삭제하는 엔드포인트를 생성하는 함수
 * @property {object} endpoints.recipients - 수신자 관련 엔드포인트
 * @property {string} endpoints.recipients.list - 수신자 목록을 가져오는 엔드포인트
 * @property {string} endpoints.recipients.create - 새 수신자를 생성하는 엔드포인트
 * @property {function} endpoints.recipients.read - 특정 수신자를 조회하는 엔드포인트를 생성하는 함수
 * @property {function} endpoints.recipients.delete - 특정 수신자를 삭제하는 엔드포인트를 생성하는 함수
 * @property {function} endpoints.recipients.messagesList - 특정 수신자의 메시지 목록을 가져오는 엔드포인트를 생성하는 함수
 * @property {function} endpoints.recipients.messagesCreate - 특정 수신자에게 메시지를 생성하는 엔드포인트를 생성하는 함수
 * @property {function} endpoints.recipients.reactionsList - 특정 수신자의 반응 목록을 가져오는 엔드포인트를 생성하는 함수
 * @property {function} endpoints.recipients.reactionsCreate - 특정 수신자에게 반응을 생성하는 엔드포인트를 생성하는 함수
 */
const apiConfig = {
  baseUrl: "https://rolling-api.vercel.app",
  endpoints: {
    backgroundImages: {
      list: "/background-images/",
    },
    profileImages: {
      list: "/profile-images/",
    },
    messages: {
      delete: (id) => `/${TEAM}/messages/${id}/`,
    },
    recipients: {
      list: `/${TEAM}/recipients/`,
      create: `/${TEAM}/recipients/`,
      read: (id) => `/${TEAM}/recipients/${id}/`,
      delete: (id) => `/${TEAM}/recipients/${id}/`,
      messagesList: (recipientId) =>
        `/${TEAM}/recipients/${recipientId}/messages/`,
      messagesCreate: (recipientId) =>
        `/${TEAM}/recipients/${recipientId}/messages/`,
      reactionsList: (recipientId) =>
        `/${TEAM}/recipients/${recipientId}/reactions/`,
      reactionsCreate: (recipientId) =>
        `/${TEAM}/recipients/${recipientId}/reactions/`,
    },
  },
};

export { TEAM, apiConfig };
