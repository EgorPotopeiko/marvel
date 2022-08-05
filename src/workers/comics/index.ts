import { takeLatest } from 'redux-saga/effects';
import {ComicsActionTypes} from "../../store/comics/action-types";
import loadAllComics from "./load_all_comics";
import loadComic from "./load_comic";

export function* comicsSaga() {
    yield takeLatest(ComicsActionTypes.GET_ALL_COMICS_START, loadAllComics);
    yield takeLatest(ComicsActionTypes.GET_COMIC_START, loadComic);
}