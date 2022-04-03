export const setLoading = status => {
  return {
    type: 'SET_LOADING',
    status,
  };
};

export const setTHeme = theme => {
  return {
    type: 'SET_THEME',
    theme: theme,
  };
};
