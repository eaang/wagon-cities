const cityReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  // TODO: handle some actions
  switch (action.type) {
    case 'CITY_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export default cityReducer;
