// const API_POINT = "https://rolling-api.vercel.app";

async function requestAPI(url, option) {
  const response = await fetch(`${url}`, option);
  const result = await response.json();
  return { response, result };
}

export default requestAPI;
