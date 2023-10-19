import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CircleCheckbox({ isChecked, onChange, checkboxText }) {
  return (
    <label className='flex items-center cursor-pointer'>
      <div className='relative'>
        <input
          type='checkbox'
          className='hidden'
          checked={isChecked}
          onChange={onChange}
        />
        <div className='w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center transition-all duration-300'>
          {isChecked && (
            <FontAwesomeIcon icon={'fa fa-check'} />
          )}
        </div>
      </div>
      <span className={`ml-2 text-white select-none ${isChecked ? 'line-through' : ''}`}>{checkboxText}</span>
    </label>
  );
}
