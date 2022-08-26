import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import {
  getCreatorErrorAction,
  getCreatorSuccessAction,
} from "../../store/creators/actions";
import Creators from "../../services/creators";

function* loadCreator({ payload: id }: { type: string; payload: number }) {
  try {
    const { data }: AxiosResponse = yield call(Creators.getCreator, id);
    const newData = data.data.results;
    yield put(getCreatorSuccessAction(...newData));
  } catch (error) {
    yield put(getCreatorErrorAction(error));
  }
}

export default loadCreator;
