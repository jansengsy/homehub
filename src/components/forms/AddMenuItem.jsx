import { useState } from 'react';

export default function AddMenuItem({onAddMenuItem, onClose}) {

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [prepTime, setPrepTime] = useState('');
  const [servings, setServings] = useState('');
  const [newIngredient, setNewIngredient] = useState('');

  const addNewIngredient = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      title: name,
      ingredients: ingredients,
      prepTime: prepTime,
      servings: servings,
    };

    onAddMenuItem(newItem);

    setName('');
    setIngredients([]);
    setPrepTime('');
    setServings('');

    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between m-2 text-white">
        <div className="flex flex-col gap-4 w-64 mx-2 p-2">
          <label>
            <p>Menu item name:</p>
            <input
              className="p-1 text-black"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            <p>Ingredients:</p>
            <input
              id="ingredient-input"
              className="p-1 text-black"
              type="text"
              value={newIngredient}
              onChange={e => setNewIngredient(e.target.value)}
            />
            <button
              className="px-3 py-2 mt-2 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
              onClick={addNewIngredient}>Add ingredient!
            </button>
          </label>
          <label>
            <p>PrepTime:</p>
            <input
              className="p-1 text-black"
              type="text"
              onChange={e => setPrepTime(e.target.value)}
            />
          </label>
          <label>
            <p>Servings:</p>
            <input
              className="p-1 text-black"
              type="text"
              onChange={e => setServings(e.target.value)}
            />
          </label>
        </div>
        <div className="w-64">
          <p>Ingredient list:</p>
          <ul className="mt-2 list-decimal">
            {ingredients.map((ingredient, index) => (
              <li key={index} >{ingredient}</li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="flex justify-end">
            <button
              className="px-3 py-2 m-2 bg-gray-600 hover:bg-gray-700 rounded text-white text-x"
              type="submit"
            >
              Add Item
            </button>
          </div>
    </form>
  );
}
