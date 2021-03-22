export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default reducer;
