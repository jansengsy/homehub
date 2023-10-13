import { useState, useEffect } from "react";

import SpendingTrendsTab from "../components/bills/SpendingTrendsTab";
import BillsContainer from "../components/bills/BillsContainer";

export default function Bills() {

  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/data', {
			  method: 'GET',
			})
			.then(response => response.json())
			.then(data => {
				setChartData(data);
        setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
  }, []);

  return (
    <div id='bills' className="flex flex-col min-h-full">
      <h1 className='text-4xl text-white'>Your houshold bills:</h1>
      {loading && <h1>Loading!</h1>}
      {!loading &&
        <>
          <div>
            <BillsContainer />
          </div>
          <div className="mt-auto">
            <SpendingTrendsTab />
          </div>
        </>
      }
    </div>
  );
}
