import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import {History} from 'history';
import logger from 'redux-logger';
import {rootReducer, RootState} from 'app/reducers';

export function configureStore(history: History, initialState?: RootState): Store<RootState> {
  const isProd = process.env.NODE_ENV === 'production';
  const middlewares = [routerMiddleware(history)];
  if (!isProd) {
    middlewares.push(logger);
  }

  let middleware = applyMiddleware(...middlewares);

  if (!isProd) {
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
