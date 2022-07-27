import { all, fork } from 'redux-saga/effects';
import {charactersSaga} from "./characters";

export default function* rootSaga() {
    yield all([
        fork(charactersSaga),
    ])
}