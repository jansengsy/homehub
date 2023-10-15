import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

import BillsContainer from '../components/bills/BillsContainer';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {

  const { user } = useContext(AuthContext);

  const [bills, setBills] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/bills', {
      method: 'GET',
    })
		.then(response => response.json())
		.then(data => {
      setUpcomingBills(data);
      setLoading(false);
		})
		.catch(error => {
      console.error('Error fetching data:', error);
		});
  }, []);

  const setUpcomingBills = (bills) => {
    const recentBills = bills.filter((bill) => {
      const today = new Date();
      const due = new Date(bill.dueDate);

      const timeDiff = due.getTime() - today.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);

      return daysDiff <= 7;
    });

    setBills(recentBills);
  }

  return (
    <>
      <h1 className='text-xl text-white pb-2'>Welcome back, {user.username}!</h1>
      <div>
        <h1 className='text-white'>Upcoming bills</h1>
        { loading ? <LoadingSpinner /> : <BillsContainer bills={bills}/>}
      </div>
    </>
  );
}
