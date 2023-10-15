import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Bill() {
  return (
    <div>
      <Link to={'/bills/1'} >
        <h1 className='text-white'><FontAwesomeIcon icon={'fa-solid fa-arrow-left'}/> Back to bills</h1>
      </Link>
      <h1 className='text-2xl text-white'>Bill page</h1>
    </div>
  );
}
