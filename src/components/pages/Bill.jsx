import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '../components/CustomButton';

export default function Bill() {

  const navigate = useNavigate();

  return (
    <div>
      <CustomButton
        content={<FontAwesomeIcon icon={'fa-solid fa-arrow-left'}/>}
        click={() => navigate(-1)}
        customClasses={'mt-auto'}
      />
      <h1 className='text-2xl text-white'>Bill page</h1>
    </div>
  );
}
