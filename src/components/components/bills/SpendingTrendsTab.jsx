import { useState } from 'react';

import {
  Chart as ChartJS, 
  ArcElement, 
  BarElement, 
  PointElement, 
  LineElement, 
  Tooltip, 
  Legend, 
  LinearScale, 
  CategoryScale 
} from 'chart.js';

import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';

ChartJS.register(ArcElement, BarElement, PointElement, LineElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function SpendingTrendsTab() {

  const [selectedTab, setSelectedTab] = useState(1);

  return  (
    <div className='mt-auto'>
      <h1 className='text-2xl text-white'>Spending Trends:</h1>
      <div>
        <div className='flex'>
          <button
            className={`py-2 px-4 hover:bg-gray-600 rounded-tl rounded-tr ${selectedTab === 1 ? 'bg-gray-600' : 'bg-gray-700'}`}
            onClick={() => setSelectedTab(1)}
          >
            Energy
          </button>
          <button
            className={`py-2 px-4 hover:bg-gray-600 rounded-tl rounded-tr ${selectedTab === 2 ? 'bg-gray-600' : 'bg-gray-700'}`}
            onClick={() => setSelectedTab(2)}
          >
            Water
          </button>
          <button
            className={`py-2 px-4 hover:bg-gray-600 rounded-tl rounded-tr ${selectedTab === 3 ? 'bg-gray-600' : 'bg-gray-700'}`}
            onClick={() => setSelectedTab(3)}
          >
            Spending
          </button>
        </div>
        <div className='bg-gray-700 p-4'>
          <div className={selectedTab === 1 ? '' : 'hidden'}>
            <LineChart />
          </div>
          <div className={selectedTab === 2 ? '' : 'hidden'}>
            <BarChart />
          </div>
          <div className={selectedTab === 3 ? '' : 'hidden'}>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}