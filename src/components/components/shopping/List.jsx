import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../../context/AuthContext';

export default function List() {

  const { token, user } = useContext(AuthContext);
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/shopping/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
    .then(response => response.json())
    .then(data => {
      setList(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  }, []);

  return (
    <>
      {loading && 
        <ul>
          <li>This is the first item on my list</li>
        </ul>
      }
    </>
  );
}