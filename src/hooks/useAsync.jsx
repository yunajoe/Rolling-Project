import { useEffect, useState } from "react";

// fetchFunc은 promise를 return하는 function를 넣어준다
export const useAsync = (fetchFunc, param) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchFuncExecute = async () => {
    setLoading(true);
    try {
      const { response, result } = await fetchFunc(param);
      if (response.ok) {
        setData(result);
      }
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFuncExecute();
  }, []);
  return { loading, error, data };
};
