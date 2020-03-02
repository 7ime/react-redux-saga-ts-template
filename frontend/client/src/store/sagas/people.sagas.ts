import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
    EPeopleActions,
    fetchHumanErrorAction,
    fetchHumanSuccessAction,
    fetchPeopleErrorAction,
    fetchPeopleSuccessAction, IFetchHumanAction,
    IFetchPeopleAction
} from '../actions/people.actions';
import getService from '../../services';
import {IService} from '../../services/model';

const service: IService = getService();

function* fetchPeople(action: IFetchPeopleAction) {
    try {
        const peoples = yield call(service.peopleService.fetchPeople);

        yield put(fetchPeopleSuccessAction(peoples));
    } catch (e) {
        yield put(fetchPeopleErrorAction());
    }
}

function* fetchPeopleSaga() {
    yield takeLatest(EPeopleActions.FetchPeople, fetchPeople);
}

function* fetchHuman(action: IFetchHumanAction) {
    try {
        const human = yield call(service.peopleService.fetchHuman, action.payload);

        yield put(fetchHumanSuccessAction(human));
    } catch (e) {
        yield put(fetchHumanErrorAction());
    }
}

function* fetchHumanSaga() {
    yield takeLatest(EPeopleActions.FetchHuman, fetchHuman);
}

export default function* peopleSagas() {
    yield all([
        fetchPeopleSaga(),
        fetchHumanSaga()
    ]);
}