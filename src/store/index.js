import {createStore} from 'redux';
import {allReducers} from './allReducers';

export const store = createStore(allReducers);
