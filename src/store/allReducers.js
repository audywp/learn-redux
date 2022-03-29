import {combineReducers} from 'redux';
import {profileReducer} from '../screens/Profifle/redux/reducer';
import movieReducer from '../reducer/movieReducer';
import HomeReducer from '../screens/Home/redux/reducer';

export const allReducers = combineReducers({
  profile: profileReducer,
  movie: movieReducer,
  home: HomeReducer,
});
