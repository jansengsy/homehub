import BillTile from './BillTile';
import Grid from '../../layout/Grid';

export default function BillsContainer({bills}) {


  return (
    <div className='max-h-72 overflow-scroll w-full'>
      <Grid>
        {bills.map((bill, index) => (
          <BillTile key={index} details={bill}/>
        ))}
      </Grid>
    </div>
  );
}
