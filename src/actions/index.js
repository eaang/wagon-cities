import cities from '../../data/cities';

const setCities = () => {
  // TODO: Api call! For now, simulate a DB

  return {
    type: 'SET_CITIES',
    payload: cities
  };
};

const selectCity = (city) => {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
};

export { setCities, selectCity as default };
