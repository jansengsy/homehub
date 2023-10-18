import { useNavigate } from 'react-router-dom';

import BillTile from './BillTile';
import Grid from '../../layout/Grid';
import Card from '../../layout/Card';

export default function BillsContainer({bills}) {

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/bill/${id}`);
  }
  
  return (
    <div className='max-h-72 overflow-scroll w-full'>
      <Grid>
        {bills.map((bill) => (
          <Card key={bill.id} click={() =>handleClick(bill.id)}>
            <BillTile bill={bill} />
          </Card>
        ))}
      </Grid>
      
    </div>
  );
}
