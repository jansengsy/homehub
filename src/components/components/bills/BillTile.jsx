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
    <div className='flex items-center gap-x-5 overflow-hidden h-28 px-4'>
      <div className='flex items-center justify-center flex-shrink-0 w-1/4'>
        <FontAwesomeIcon className='h-14 text-white' icon={`${icon}`} />
      </div>
      <div className='flex flex-col flex-grow'>
        <h1 className='text-xl text-white overflow-hidden'>{heading}</h1>
        <p className='text-md text-white text-opacity-50 overflow-hidden'>{formattedDueDate}</p>
      </div>
      <div className='flex items-center justify-end flex-shrink-0 w-1/4'>
        <h1 className='text-white text-2xl'>£{amount}</h1>
      </div>
    </div>
  );
}
