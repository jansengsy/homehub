import MenuIngredientsList from "../components/MenuIngredientsList";

export default function MenuCard({ item }) {
  const { title, ingredients, servings, prepTime } = item;

  return (
    <div className={'flex flex-col justify-between w-full h-64 p-2 shadow-md hover:shadow-gray-600 lg:max-w-lg bg-gray-600 text-white'}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <MenuIngredientsList ingredients={ingredients}/>
      <div className="flex justify-between">
        <span className="text-left">{servings}</span>
        <span className="text-right">{prepTime}</span>
      </div>
    </div>
  );
}
