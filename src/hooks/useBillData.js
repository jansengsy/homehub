import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

export const useBillsData = () => {

  const { token, user } = useContext(AuthContext);

  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/bills/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        setBills(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return { bills, loading };
};
