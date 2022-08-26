import { AxiosResponse } from "axios";
import { call, select, put } from "redux-saga/effects";
import { statePage } from "../../store/pagination/selectors";
import {
  getAllCreatorsErrorAction,
  getAllCreatorsSuccessAction,
} from "../../store/creators/actions";
import Creators from "../../services/creators";
import { stateSearch } from "../../store/search/selectors";
import { setTotal } from "../../store/pagination/actions";

function* loadAllCreators() {
  try {
    const getPage: number = yield select(statePage);
    const getSearch: string = yield select(stateSearch);
    const { data }: AxiosResponse = yield call(
      Creators.getAllCreators,
      getSearch,
      getPage - 1
    );
    const newData = data.data.results;
    const newTotal = data.data.total;
    yield put(setTotal(newTotal));
    yield put(getAllCreatorsSuccessAction(newData));
  } catch (error) {
    yield put(getAllCreatorsErrorAction(error));
  }
}

export default loadAllCreators;
