const initialState = {
  listTopTab: ['Now Playing', 'Top Rated', 'Popular'],
};

const HomeReducer = (state = initialState, action) => {
  if (action.type === 'SET_NAMA') {
    return {
      ...state,
      nama: action.nama,
    };
  }
  return state;
};
export default HomeReducer;
