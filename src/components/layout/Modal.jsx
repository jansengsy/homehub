import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50' onClick={handleModalClick}>
      <div className='flex flex-col bg-white rounded shadow-md'>
        <div className='flex justify-end'>
          <button onClick={onClose} className='bg-gray-600 hover:bg-gray-700 rounded text-white px-2 py-1 m-1'>
            <FontAwesomeIcon icon='fa-solid fa-times'/>
          </button>
        </div>
        <div className='flex items-center justify-center bg-gray-800'>
          {children}
        </div>
      </div>
    </div>
  );
}
