import BillTile from "./BillTile";

export default function BillsContainer({bills}) {


  return (
    <div className='grid grid-cols-2 gap-4 max-h-72 overflow-y-scroll pr-4 my-2'>
      {bills.map((bill, index) => (
        <BillTile key={index} details={bill}/>
      ))}
    </div>
  );
}
