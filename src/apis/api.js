const APIpoint = "https://rolling-api.vercel.app";

async function requestAPI(url, option) {
  const response = await fetch(`${APIpoint}${url}`, option);
  const result = await response.json();
  return { response, result };
}

export default requestAPI;
