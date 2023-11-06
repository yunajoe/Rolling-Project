export const team = "1-6";
export let id = 1;

export const API_ENDPOINTS = {
  backgroundImages: "/background-images/",
  profileImages: "/profile-images/",
  recipients: {
    getRecipient: `/${team}/recipients/${id}/`,
    getRecipients: `/${team}/recipients/`,
    getRecipientMessages: `/${team}/recipients/${id}/messages/`,
    getRecipientReactions: `/${team}/recipients/${id}/reactions/`,
  },
};
