export const TEAM = "1-6";
export let ID = 1;

export const API_ENDPOINTS = {
  backgroundImages: "/background-images/",
  profileImages: "/profile-images/",
  recipients: {
    getRecipient: `/${TEAM}/recipients/${ID}/`,
    getRecipients: `/${TEAM}/recipients/`,
    getRecipientMessages: `/${TEAM}/recipients/${ID}/messages/`,
    getRecipientReactions: `/${TEAM}/recipients/${ID}/reactions/`,
  },
};
