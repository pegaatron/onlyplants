import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxiosGet(endpoint, params) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const fetchData = (endpoint, params) => {
    axios.get(`http://localhost:3001${endpoint}`, params)
    .then((data) => {
      setData(data.data[0])
    })
    .catch((err) => setError(err))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData(endpoint, params);
  },[])

  return {data, error, isLoading}
}

export default useAxiosGet;