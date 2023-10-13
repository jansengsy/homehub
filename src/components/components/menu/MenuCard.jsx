import MenuIngredientsList from './MenuIngredientsList';
import CustomButton from '../CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuCard({ item, removeMenuItem }) {

  const { id, title, ingredients, servings, prepTime } = item;
  
  return (
    <>
      <div className='flex justify-between w-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <CustomButton
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
