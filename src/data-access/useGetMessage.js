// GET /recipients/{recipientId}/
// GET https://rolling-api.vercel.app/0-3/recipients/2/

import requestAPI from "../apis/api";
import { mapProfileData } from "../utils/mapProfileData";
import { useAsync } from "../hooks/useAsync";
import { API_ENDPOINTS } from "../apis/config";

// const url = API_ENDPOINTS.recipients.getRecipientMessages;
// const url = API_ENDPOINTS.baseUrl + API_ENDPOINTS.recipients.getRecipient;
const base = API_ENDPOINTS.baseUrl;
const end = API_ENDPOINTS.recipients.listRecipientMessages;
const url = base + end(1);

// console.log(API_ENDPOINTS.baseUrl + "");

const getData = async () => {
  const { response, result } = await requestAPI(url, {
    method: "GET",
  });
  return { response, result };
};

// data =>  {count: 5, next: null, previous: null, results: Array(5)}
export const useGetMessage = () => {
  const { data } = useAsync(getData);
  const dataArr = data?.results;
  const res = dataArr?.map(mapProfileData);
  return {
    data: res,
  };
};
