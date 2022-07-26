import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { History } from "history";
import rootSaga from "./workers/index";
import reducers from "./store";

const IS_BROWSER = typeof window !== "undefined";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const composeEnhancers =
  (IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
function configureStore(initialState = {}, history: History) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return { store };
}

export default configureStore;
