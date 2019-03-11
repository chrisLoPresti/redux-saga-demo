import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

declare global {
  interface Window {
    /* eslint-disable-next-line */
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, reduxImmutableStateInvariant()];
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const initialState = {
  auth: {
    user: '',
  },
};

const store = createStore(rootReducer, initialState, enhancer);

export default function configureStore(): typeof store {
  sagaMiddleware.run(rootSaga);
  return store;
}
