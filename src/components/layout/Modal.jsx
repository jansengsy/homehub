import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '../components/CustomButton';

export default function Modal({ onClose, children }) {

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50' onClick={handleModalClick}>
      <div className='flex flex-col bg-white shadow-md'>
        <div className='flex justify-end'>
          <CustomButton
            click={onClose}
            content={<FontAwesomeIcon icon='fa-solid fa-times'/>}
            customClasses={'m-1'}
          />
        </div>
        <div className='flex items-center justify-center bg-gray-800'>
          {children}
        </div>
      </div>
    </div>
  );
}
