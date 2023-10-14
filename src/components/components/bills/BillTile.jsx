import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BillTile({details}) {

  const { icon, heading, dueDate, amount } = details;

  return (
    <div className='flex gap-x-4 h-28 bg-gray-700 py-2 px-4'>
      <div className='flex items-center h-full'>
        <FontAwesomeIcon className='h-3/4 text-white' icon={`${icon}`}/>
      </div>
      <div className='flex flex-col justify-between flex-1 py-4'>
        <h1 className='text-2xl text-white'>{heading}</h1>
        <p className='w-full text-xl text-white text-opacity-50'>{dueDate}</p>
      </div>
      <div className='flex items-center text-white text-2xl'>
        <h1>£{amount}</h1>
      </div>
    </div>
  );
}
