import cities from '../../data/cities';

const setCities = () => {
  // TODO: Api call! For now, simulate a DB

  return {
    type: 'SET_CITIES',
    payload: cities
  };
};

export { setCities as default };
