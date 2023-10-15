import { useBillsData } from '../../hooks/useBillData';

import SpendingTrends from '../components/bills/SpendingTrends';
import BillsContainer from '../components/bills/BillsContainer';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Bills() {

  const { bills, loading } = useBillsData();

  return (
    <div id='bills' className='flex flex-col min-h-full'>
      <h1 className='text-4xl text-white'>Your houshold bills:</h1>
      <div className='flex items-center justify-center flex-grow'>
        {!loading ? <BillsContainer bills={bills}/> : <LoadingSpinner />}
      </div>
      <div className='mt-auto'>
        <SpendingTrends />
      </div>
    </div>
  );
}
