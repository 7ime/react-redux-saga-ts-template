import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {appReducer} from './reducers/app.reducer';
import peopleSagas from './sagas/people.sagas';

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(peopleSagas);

const getAppStore = () => appStore;

export default getAppStore;
