export const team = "1-6";
export let id = "";

export const API_ENDPOINTS = {
  baseUrl: "https://rolling-api.vercel.app",
  backgroundImages: {
    backgroundImages: "/background-images/",
  },
  profileImages: {
    profileImages: "/profile-images/",
  },
  recipients: {
    getRecipient: `/${team}/recipients/${id}/`,
    getRecipients: `/${team}/recipients/`,
    messages: {
      getRecipientMessages: `/${team}/recipients/${id}/messages/`,
    },
    reactions: {
      getRecipientReactions: `/${team}/recipients/${id}/reactions/`,
    },
  },
};
