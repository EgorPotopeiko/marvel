import {AxiosResponse} from "axios";
import { call, select, put } from 'redux-saga/effects';
import {statePage} from "../../store/pagination/selectors";
import Events from "../../services/events";
import {getAllEventsErrorAction, getAllEventsSuccessAction} from "../../store/events/actions";
import {stateSearch} from "../../store/search/selectors";

function* loadAllEvents() {
    try {
        const getPage: number = yield select(statePage);
        const getSearch: string = yield select(stateSearch)
        const { data }: AxiosResponse = yield call(Events.getAllEvents, getSearch, getPage - 1);
        const newData = data.data.results;
        yield put(getAllEventsSuccessAction(newData));
    }
    catch (error) {yield put(getAllEventsErrorAction(error))}
}

export default loadAllEvents