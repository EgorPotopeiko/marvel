import { takeLatest } from 'redux-saga/effects';
import {CreatorsActionTypes} from "../../store/creators/action-types";
import loadAllCreators from "./load_all_creators";

export function* creatorsSaga() {
    yield takeLatest(CreatorsActionTypes.GET_ALL_CREATORS_START, loadAllCreators);
}