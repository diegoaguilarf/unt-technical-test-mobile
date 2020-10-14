import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger';
import reducers from "./reducers";
import sagas from "./sagas";

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
  
    const store = compose(
      applyMiddleware(sagaMiddleware, logger)
    )(createStore)(reducers);
  
    sagaMiddleware.run(sagas);
  
    return store;
  }