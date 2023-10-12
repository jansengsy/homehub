import { useState } from 'react';

import MenuIngredientsList from '../components/MenuIngredientsList';
import FormInput from '../components/FormInput';
import FormError from '../components/FormError';

export default function AddMenuItem({onAddMenuItem, onClose}) {

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [prepTime, setPrepTime] = useState('');
  const [servings, setServings] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [nameError, setNameError] = useState('');
  const [prepTimeError, setPrepTimeError] = useState('');
  const [servingsError, setServingsError] = useState('');

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
    setNameError('');
    setPrepTimeError('');
    setServingsError('');
  }

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!prepTime.match(/^\d+$/)) {
      setPrepTimeError('Prep time must be a positive number.');
      isValid = false;
    } else {
      setPrepTimeError('');
    }

    if (!servings.match(/^\d+$/)) {
      setServingsError('Servings must be a positive number.');
      isValid = false;
    } else {
      setServingsError('');
    }

    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between m-2 text-white">
        <div className="flex flex-col gap-4 w-64 mx-2 p-2">
          <label>
            <p>Menu item name:</p>
            <FormInput setter={setName}/>
            {nameError && <FormError error={nameError}/>}
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
            <p>PrepTime (in mins):</p>
            <FormInput setter={setPrepTime}/>
            {prepTimeError && <FormError error={prepTimeError}/>}
          </label>
          <label>
            <p>Servings:</p>
            <FormInput setter={setServings}/>
            {servingsError && <FormError error={servingsError}/>}
          </label>
        </div>
        <div className="w-64">
          <p>Current ingredient list:</p>
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
