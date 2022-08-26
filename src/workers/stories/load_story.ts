import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import Stories from "../../services/stories";
import {
  getStoryErrorAction,
  getStorySuccessAction,
} from "../../store/stories/actions";

function* loadStory({ payload: id }: { type: string; payload: number }) {
  try {
    const { data }: AxiosResponse = yield call(Stories.getStory, id);
    const newData = data.data.results;
    yield put(getStorySuccessAction(...newData));
  } catch (error) {
    yield put(getStoryErrorAction(error));
  }
}

export default loadStory;
