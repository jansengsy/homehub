import { useState, useEffect } from 'react';

import SpendingTrendsTab from '../components/bills/SpendingTrendsTab';
import BillsContainer from '../components/bills/BillsContainer';

export default function Bills() {

  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/bills', {
			  method: 'GET',
			})
			.then(response => response.json())
			.then(data => {
				setBills(data);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
  }, []);

  return (
    <div id='bills' className='flex flex-col min-h-full'>
      <h1 className='text-4xl text-white'>Your houshold bills:</h1>
      <div>
        <BillsContainer bills={bills}/>
      </div>
      <div className='mt-auto'>
        <SpendingTrendsTab />
      </div>
    </div>
  );
}
