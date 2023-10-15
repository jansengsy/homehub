import MenuIngredientsList from './MenuIngredientsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuCard({ item, removeMenuItem }) {

  const { id, title, ingredients, servings, prepTime } = item;

  const handleRemoveClick = (event) => {
    // Prevent the click event from propagating to the parent Card component
    event.stopPropagation();
    removeMenuItem(id);
  };
  
  return (
    <>
      <div className='flex justify-between w-full'>
        <h3 className='text-2xl'>{title}</h3>
        <button
          onClick={handleRemoveClick}
        >
          <FontAwesomeIcon className='hover:text-red-500' icon='fa-solid fa-trash'/>
        </button>
      </div>
      <MenuIngredientsList ingredients={ingredients}/>
      <div className='flex justify-between w-full'>
        <span className='text-left'>Serves {servings} people</span>
        <span className='text-right'>{prepTime} mins</span>
      </div>
    </>
  );
}
