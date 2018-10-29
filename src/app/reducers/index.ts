import {combineReducers} from 'redux';
import {RootState} from './state';
import {routerReducer, RouterState} from 'react-router-redux';
import {authorization} from "app/reducers/authorization";

export {RootState, RouterState};

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  router: routerReducer as any,
  authorization: authorization as any
  // add custom reducers here
});
