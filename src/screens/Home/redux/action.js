import axios from 'axios';
import {BASE_URL} from '../../../Helpers/api';
import {navigate} from '../../../Helpers/navigate';
import {setLoading} from '../../../store/globalAction';
import {store} from '../../../store';

const token = store.getState().Global.token;

axios.defaults.headers.Authorization = `Bearer ${token}`;

export const getDataMovie = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(`${BASE_URL}/movie/now_playing`);
    console.log(res);

    if (res.status === 200) {
      return dispatch(setDataMovieNowPlaying(res.data.results));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const setDataMovieNowPlaying = payload => {
  return {
    type: 'SET_DATA_NOW_PLAYING',
    dataNowPlaying: payload,
  };
};

// action get byId

export const getDetailMovieById = id => async dispatch => {
  try {
    dispatch(setLoading(true));

    const res = await axios.get(`${BASE_URL}/movie/${id}`);
    if (res.status === 200) {
      dispatch(setDetailMovieToReducer(res.data));
      navigate('Detail Film');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

const setDetailMovieToReducer = payload => {
  return {
    type: 'DETAIL_MOVIE',
    detail: payload,
  };
};
