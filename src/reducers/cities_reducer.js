const citiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  // TODO: handle some actions
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;
