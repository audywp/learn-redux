const intialState = {
  loading: false,
  theme: 'light',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2Q4YjA1NjhjMzIyYTkxOTUzN2JkMWM0MDhiMWRhOCIsInN1YiI6IjVlZDEyYWM5M2RjMzEzMDAxZmNjZDI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t_jB76z5LkR-ayjxfGxfChGwCvY3e3PwEYTu4EuDJZk',
};

const Global = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.status,
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default Global;
