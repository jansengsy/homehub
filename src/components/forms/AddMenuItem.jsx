import { useState } from 'react';

import MenuIngredientsList from '../components/MenuIngredientsList';
import FormInput from '../components/FormInput';

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

  const resetForm = () => {
    setName('');
    setIngredients([]);
    setPrepTime('');
    setServings('');
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
    resetForm();
    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between m-2 text-white">
        <div className="flex flex-col gap-4 w-64 mx-2 p-2">
          <label>
            <p>Menu item name:</p>
            <FormInput setter={setName}/>
          </label>
          <label>
            <p>Ingredients:</p>
            <FormInput setter={setNewIngredient} value={newIngredient}/>
            <button
              className="px-3 py-2 mt-2 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
              onClick={addNewIngredient}>Add ingredient!
            </button>
          </label>
          <label>
            <p>PrepTime:</p>
            <FormInput setter={setPrepTime}/>
          </label>
          <label>
            <p>Servings:</p>
            <FormInput setter={setServings}/>
          </label>
        </div>
        <div className="w-64">
          <p>Ingredient list:</p>
          <MenuIngredientsList ingredients={ingredients}/>
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
