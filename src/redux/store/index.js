import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
const sageMiddleware = createSagaMiddleware();
const middleWares = [thunk, sageMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleWares))
);
sageMiddleware.run(rootSaga);

export default store;