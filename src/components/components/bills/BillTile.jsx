import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BillTile({bill}) {

  const { icon, heading, dueDate, amount } = bill;

  const formatDueDate = (date) => {
    const today = new Date();
    const due = new Date(date);

    const timeDiff = due.getTime() - today.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    if (daysDiff <= 0) {
      return 'Today';
    } else if (daysDiff <= 1) {
      return 'Tomorrow';
    } else if (daysDiff <= 7) {
      return 'Next week';
    } else {
      return due.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
    }
  };

  const formattedDueDate = formatDueDate(dueDate);

  return (
    <div className='flex gap-x-5 h-28 bg-gray-700 py-2 px-4 hover:bg-gray-600 cursor-pointer'>
      <div className='w-16 flex items-center justify-center h-full'>
        <FontAwesomeIcon className='h-14 text-white' icon={`${icon}`}/>
      </div>
      <div className='w-16 flex flex-col flex-1 justify-between overflow-hidden py-4'>
        <h1 className='text-2xl text-white'>{heading}</h1>
        <p className='w-full text-xl text-white text-opacity-50'>{formattedDueDate}</p>
      </div>
      <div className='flex items-center text-white text-2xl'>
        <h1>£{amount}</h1>
      </div>
    </div>
  );
}
