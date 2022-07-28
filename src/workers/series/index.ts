import { takeLatest } from 'redux-saga/effects';
import {SeriesActionTypes} from "../../store/series/action-types";
import loadAllSeries from "./load_all_series";

export function* seriesSaga() {
    yield takeLatest(SeriesActionTypes.GET_ALL_SERIES_START, loadAllSeries);
}