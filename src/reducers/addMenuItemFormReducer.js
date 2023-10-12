export default function addMenuItemFormReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, [action.field + 'Error']: action.value };
    case 'RESET':
      return action.value;
    default:
      return state;
  }
}
