import Button from "../Button";

export default function MenuDirections({item, close}) {

  const { title, ingredients, servings, prepTime, steps } = item;

  return (
    <>
      <div className="flex flex-col text-white">
        <h1 className="text-4xl">Directions:</h1>
        <div className="p-2">

        </div>
        <Button content={'Go back to the menu'} click={close}/>
      </div>

      <p>{item.name}</p>
    </>
  );
}