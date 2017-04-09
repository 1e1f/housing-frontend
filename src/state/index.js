import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as housingMap } from './housingMap';

export default function createReducer(asyncReducers) {
  return combineReducers({
    housingMap,
    routing: routerReducer,
    ...asyncReducers,
  });
}
