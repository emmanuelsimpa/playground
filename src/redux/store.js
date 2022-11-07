import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true
    }),
    sagaMiddleware,
    logger
  ];;

export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
    // enhancers: [reduxBatch]
  });

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store; 