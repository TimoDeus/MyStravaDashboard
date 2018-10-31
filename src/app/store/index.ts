import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import {History} from 'history';
import logger from 'redux-logger';
import {rootReducer, RootState} from 'app/reducers';
import {isProduction} from "app/utils";
import thunk from 'redux-thunk';
// @ts-ignore
import reduxCookiesMiddleware, {getStateFromCookies} from 'redux-cookies-middleware';

export function configureStore(history: History): Store<RootState> {

  const cookiePaths = {
    'authorization.accessToken': {name: 'access_token'}
  };
  const stateSkeleton = {authorization: {}};
  const initialState = getStateFromCookies(stateSkeleton, cookiePaths);

  const middlewares = [thunk, routerMiddleware(history), reduxCookiesMiddleware(cookiePaths)];
  if (!isProduction()) {
    middlewares.push(logger);
  }

  let middleware = applyMiddleware(...middlewares);

  if (!isProduction()) {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
