import { takeLatest } from 'redux-saga/effects';
import {ComicsActionTypes} from "../../store/comics/action-types";
import loadAllComics from "./load_all_comics";

export function* comicsSaga() {
    yield takeLatest(ComicsActionTypes.GET_ALL_COMICS_START, loadAllComics);
}