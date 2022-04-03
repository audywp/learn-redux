import {combineReducers} from 'redux';
import {profileReducer} from '../screens/Profifle/redux/reducer';
import HomeReducer from '../screens/Home/redux/reducer';
import Global from './globalReducer';

export const allReducers = combineReducers({
  profile: profileReducer,
  home: HomeReducer,
  Global,
});
