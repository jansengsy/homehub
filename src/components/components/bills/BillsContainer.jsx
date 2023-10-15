import BillTile from './BillTile';
import Grid from '../../layout/Grid';
import Card from '../../layout/Card';

export default function BillsContainer({bills}) {
  return (
    <div className='max-h-72 overflow-scroll w-full'>
      <Grid>
        {bills.map((bill, index) => (
          <Card key={index} >
            <BillTile bill={bill} />
          </Card>
        ))}
      </Grid>
      
    </div>
  );
}
