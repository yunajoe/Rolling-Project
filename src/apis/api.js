const APIpoint = "https://rolling-api.vercel.app/";

async function requestAPI(url, option) {
  const response = await fetch(`${APIpoint}${url}`, option);
  const result = await response.json();
  let a;
  a = "123";
  return { response, result, a };
}

export default requestAPI;
