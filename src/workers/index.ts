import { all, fork } from "redux-saga/effects";
import { charactersSaga } from "./characters";
import { comicsSaga } from "./comics";
import { creatorsSaga } from "./creators";
import { eventsSaga } from "./events";
import { seriesSaga } from "./series";
import { storiesSaga } from "./stories";

export default function* rootSaga() {
  yield all([
    fork(charactersSaga),
    fork(comicsSaga),
    fork(creatorsSaga),
    fork(eventsSaga),
    fork(seriesSaga),
    fork(storiesSaga),
  ]);
}
