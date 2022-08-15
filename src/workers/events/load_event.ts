import {AxiosResponse} from "axios";
import { call, put } from 'redux-saga/effects';
import Events from "../../services/events";
import {
    getEventErrorAction,
    getEventSuccessAction
} from "../../store/events/actions";

function* loadEvent({payload: id}: any) {
    try {
        const { data }: AxiosResponse = yield call(Events.getEvent, id);
        const newData = data.data.results;
        yield put(getEventSuccessAction(...newData));
    }
    catch (error) {yield put(getEventErrorAction(error))}
}

export default loadEvent