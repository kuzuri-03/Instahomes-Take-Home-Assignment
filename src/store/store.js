import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import  Reducer  from './reducer';
import  saga  from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga)

export default store