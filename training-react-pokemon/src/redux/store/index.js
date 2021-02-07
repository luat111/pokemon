import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const middleWares = [thunk];

const store = createStore(
    reducers,
    compose(applyMiddleware(...middleWares))
);

export default store;