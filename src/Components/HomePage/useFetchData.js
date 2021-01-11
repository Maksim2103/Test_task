import { useState, useEffect } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [countReload, setCountReload] = useState(0);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://randomuser.me/api/?results=47');
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        setData(results);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, [countReload]);

  const reloadFetch = () => {
    setCountReload(countReload + 1);
  };

  return {
    data,
    isLoading,
    isError,
    reloadFetch,
  };
};
