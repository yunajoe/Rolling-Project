const TEAM = "1-6";
const id = 1;
export const API_ENDPOINTS = {
  baseUrl: "https://rolling-api.vercel.app",
  backgroundImages: {
    getBackgroundImages: "/background-images/",
  },
  profileImages: {
    getProfileImages: "/profile-images/",
  },
  messages: {
    deleteMessage: `/${TEAM}/messages/${id}/messages_delete/`,
  },
  recipients: {
    getRecipients: `/${TEAM}/recipients/`,
    createRecipient: `/${TEAM}/recipients/`,
    getRecipient: (id) => `/${TEAM}/recipients/${id}/`,
    deleteRecipient: (id) => `/${TEAM}/recipients/${id}/`,
    listRecipientMessages: (recipientId) =>
      `/${TEAM}/recipients/${recipientId}/messages/`,
    createRecipientMessage: (recipientId) =>
      `/${TEAM}/recipients/${recipientId}/messages/`,
    getRecipientReactions: (recipientId) =>
      `/${TEAM}/recipients/${recipientId}/reactions/`,
    postRecipientReaction: (recipientId) =>
      `/${TEAM}/recipients/${recipientId}/reactions/`,
  },
};

export default API_ENDPOINTS;
