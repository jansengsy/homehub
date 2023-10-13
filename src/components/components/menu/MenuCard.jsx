import MenuIngredientsList from './MenuIngredientsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuCard({ item, removeMenuItem }) {

  const { id, title, ingredients, servings, prepTime } = item;
  
  return (
    <>
      <div className='flex justify-between'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <button onClick={() => removeMenuItem(id)} className='bg-gray-600 hover:bg-gray-700 rounded text-white px-2 py-1 m-1'>
          <FontAwesomeIcon icon='fa-solid fa-trash'/>
        </button>
      </div>
      <MenuIngredientsList ingredients={ingredients}/>
      <div className='flex justify-between'>
        <span className='text-left'>Serves {servings} people</span>
        <span className='text-right'>{prepTime} mins</span>
      </div>
    </>
  );
}