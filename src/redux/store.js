import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import rootSaga from "./rootSaga";
import { fetchCollections } from "./shop/shop.saga";



const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, thunk, sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

