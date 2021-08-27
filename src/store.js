import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import createSagaMiddleware from "redux-saga";

import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import { componentHeaderSaga } from "./components/componentsHeading/componentRedux/saga";
import ComponentHeaderReducer from "./components/componentsHeading/componentRedux/reducers";

// for i in   "src/others/*"
// import x from i/componentRedux/reducers

const rootReducer = combineReducers({
  componentHeader: ComponentHeaderReducer,
});

function* rootSaga() {
  yield all([componentHeaderSaga()]);
}

const logger = createLogger({
  collapsed: true,
});

// █▀█ █▀▀ █▀▄ █░█ ▀▄▀ ▄▄ █▀ ▄▀█ █▀▀ ▄▀█
// █▀▄ ██▄ █▄▀ █▄█ █░█ ░░ ▄█ █▀█ █▄█ █▀█

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);
