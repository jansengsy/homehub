import Button from '../Button';
import MenuIngredientsList from './MenuIngredientsList';
import MenuStepsList from './MenuStepsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuDirections({item, close}) {

  const { title, ingredients, steps, servings, prepTime } = item;

  return (
    <>
      <div className="flex flex-col h-full text-white">
        <div className="flex flex-col gap-4 p-2">
          <h1 className="text-3xl">{title}</h1>
          <div className="flex space-x-2">
            <span><FontAwesomeIcon icon='fa-solid fa-clock'/> Prep time: {prepTime}</span>
            <span><FontAwesomeIcon icon='fa-solid fa-user'/> Serves: {servings}</span>
          </div>
          <div>
            <p className="text-xl">Ingredients:</p>
            <div className="m-2">
              <MenuIngredientsList ingredients={ingredients}/>
            </div>
          </div>
          <div>
            <p className="text-xl">Steps:</p>
            <div className="m-2">
              <MenuStepsList steps={steps}/>
            </div>
          </div>
        </div>
        <Button content={'Go back to the menu'} click={close} customClasses={'mt-auto'}/>
      </div>

      <p>{item.name}</p>
    </>
  );
}
