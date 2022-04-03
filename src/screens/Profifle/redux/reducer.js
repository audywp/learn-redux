const initialState = {
  name: 'audy pratama',
  age: 20,
  kriteria: {height: '180 cm', weight: '72 lbs'},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAMA':
      return {
        ...state,
        name: action.nama,
      };

    case 'SET_AGE':
      return {
        ...state,
        age: action.payload,
      };

    default:
      return state;
  }
};
