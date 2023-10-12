import { useReducer } from 'react';

import MenuIngredientsList from '../components/MenuIngredientsList';
import FormError from '../components/FormError';

import addMenuItemFormReducer from '../../reducers/addMenuItemFormReducer';

export default function AddMenuItem({onAddMenuItem, onClose}) {

  const initialState = {
    name: '',
    prepTime: null,
    servings: null,
    nameError: '',
    prepTimeError: '',
    servingsError: '',
    ingredients: [],
    newIngredient: '',
  }

  const [state, dispatch] = useReducer(addMenuItemFormReducer, initialState);

  const addNewIngredient = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_FIELD', field: 'newIngredient', value: '' });
    dispatch({ type: 'SET_FIELD', field: 'ingredients', value: [...state.ingredients, state.newIngredient] });
  }

  const resetForm = () => {
    dispatch({ type: 'RESET', value: initialState });
  }

  const setError = (field, value) => {
    dispatch({ type: 'SET_ERROR', field, value });
  }

  const setField = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  }

  const validateForm = () => {
    let isValid = true;

    if (state.name.trim() === '') {
      setError('name', 'Name is required');
      isValid = false;
    } else {
      setError('name', '');
    }

    if (!state.prepTime?.match(/^\d+$/)) {
      setError('prepTime', 'Prep time must be a positive number');
      isValid = false;
    } else {
      setError('prepTime', '');
    }

    if (!state.servings?.match(/^\d+$/)) {
      setError('servings', 'Servings must be a positive number');
      isValid = false;
    } else {
      setError('servings', '');
    }

    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newItem = {
        title: state.name,
        ingredients: state.ingredients,
        prepTime: state.prepTime,
        servings: state.servings,
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
            <input
              className="p-1 text-black"
              type="text"
              onChange={e => setField('name', e.target.value)}
            />
            {state.nameError && <FormError error={state.nameError}/>}
          </label>
          <label>
            <p>Ingredients:</p>
            <input
              className="p-1 text-black"
              type="text"
              value={state.newIngredient}
              onChange={e => setField('newIngredient', e.target.value)}
            />
            <button
              className="px-3 py-2 mt-2 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
              onClick={addNewIngredient}>Add ingredient!
            </button>
          </label>
          <label>
            <p>PrepTime (in mins):</p>
            <input
              className="p-1 text-black"
              type="text"
              onChange={e => setField('prepTime', e.target.value)}
            />
            {state.prepTimeError && <FormError error={state.prepTimeError}/>}
          </label>
          <label>
            <p>Servings:</p>
            <input
              className="p-1 text-black"
              type="text"
              onChange={e => setField('servings', e.target.value)}
            />
            {state.servingsError && <FormError error={state.servingsError}/>}
          </label>
        </div>
        <div className="w-64">
          <p>Current ingredient list:</p>
          <MenuIngredientsList ingredients={state.ingredients}/>
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
