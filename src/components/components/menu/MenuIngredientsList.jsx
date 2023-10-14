export default function MenuIngredientsList({ ingredients }) {
  return (
      <div className='w-full overflow-scroll'>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
  );
}
