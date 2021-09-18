import { useState } from "react";

function useApi(apiFn) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);
    const response = await apiFn(...args);
    setIsLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setData(response.data);
  };

  return {
    request,
    data,
    isLoading,
    error,
  };
}

export default useApi;
