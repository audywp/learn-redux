export const setNama = data => {
  return {
    type: 'SET_NAMA',
    nama: data,
  };
};

export const setAge = data => {
  return {
    type: 'SET_AGE',
    payload: data,
  };
};
