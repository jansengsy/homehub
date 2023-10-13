import MenuIngredientsList from './MenuIngredientsList';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuCard({ item, removeMenuItem }) {

  const { id, title, ingredients, servings, prepTime } = item;
  
  return (
    <>
      <div className='flex justify-between w-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <Button
          content={<FontAwesomeIcon icon='fa-solid fa-trash'/>}
          click={() => removeMenuItem(id)}
        />
      </div>
      <MenuIngredientsList ingredients={ingredients}/>
      <div className='flex justify-between w-full'>
        <span className='text-left'>Serves {servings} people</span>
        <span className='text-right'>{prepTime} mins</span>
      </div>
    </>
  );
}
