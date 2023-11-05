// GET /recipients/{recipientId}/
// GET https://rolling-api.vercel.app/0-3/recipients/2/

import requestAPI from "../apis/api";
import { mapProfileData } from "../utils/mapProfileData";
import { useAsync } from "../utils/useAsync";

const getData = async () => {
  const option = "1-6/recipients/";
  const recipientId = "1/";
  const message = "messages/";
  const { response, result } = await requestAPI(
    `${option}${recipientId}${message}`,
    {
      method: "GET",
    },
  );
  return { response, result };
};

// data =>  {count: 5, next: null, previous: null, results: Array(5)}
export const useGetMessage = () => {
  const { loading, error, data } = useAsync(getData);
  const dataArr = data?.results;
  const res = dataArr?.map(mapProfileData);
  return {
    data: res,
  };
};
