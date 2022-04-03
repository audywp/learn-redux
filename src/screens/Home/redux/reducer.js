const initialState = {
  listTopTab: ['Now Playing', 'Top Rated', 'Popular'],
  movieData: [],
  nowPlaying: [],
  detailMovie: {},
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_DATA':
      return {
        ...state,
        movieData: action.payload,
      };

    case 'SET_DATA_NOW_PLAYING':
      return {
        ...state,
        nowPlaying: action.dataNowPlaying,
      };

    case 'DETAIL_MOVIE':
      return {
        ...state,
        detailMovie: action.detail,
      };

    default:
      return state;
  }
};
export default HomeReducer;
