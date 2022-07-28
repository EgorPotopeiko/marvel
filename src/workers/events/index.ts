import { takeLatest } from 'redux-saga/effects';
import {EventsActionTypes} from "../../store/events/action-types";
import loadAllEvents from "./load_all_events";

export function* eventsSaga() {
    yield takeLatest(EventsActionTypes.GET_ALL_EVENTS_START, loadAllEvents);
}