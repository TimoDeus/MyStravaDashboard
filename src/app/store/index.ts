import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import {History} from 'history';
import logger from 'redux-logger';
import {rootReducer, RootState} from 'app/reducers';
import {isProduction} from "app/utils";
import thunk from 'redux-thunk';

export function configureStore(history: History, initialState?: RootState): Store<RootState> {
  const middlewares = [thunk, routerMiddleware(history)];
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
