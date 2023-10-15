import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { useBillsData } from '../../hooks/useBillData';

import BillsContainer from '../components/bills/BillsContainer';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {

  const { user } = useContext(AuthContext);
  const { bills, loading } = useBillsData();

  const setUpcomingBills = (bills) => {
    return bills.filter((bill) => {
      const today = new Date();
      const due = new Date(bill.dueDate);

      const timeDiff = due.getTime() - today.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);

      return daysDiff <= 7;
    });
  }

  return (
    <>
      <h1 className='text-xl text-white pb-2'>Welcome back, {user.username}!</h1>
      <div>
        <h1 className='text-white'>Upcoming bills</h1>
        { loading ? <LoadingSpinner /> : <BillsContainer bills={setUpcomingBills(bills)}/>}
      </div>
    </>
  );
}
