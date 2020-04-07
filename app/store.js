import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import root from 'redux/reducers/root';
import session from 'redux/reducers/session';
import game from 'redux/reducers/game';
import config from 'redux/reducers/config';
import room from 'redux/reducers/room';

import rootSaga from 'redux/sagas';

const persistConfig = {
  key: 'persistor',
  storage,
  blacklist: ['session', 'game'],
  stateReconciler: autoMergeLevel2,
};

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
    : compose;
/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    root,
    session,
    game,
    config,
    room,
    // joinRoom,
  })
);

export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default { store, persistor };
