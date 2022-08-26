import { AxiosResponse } from "axios";
import { call, select, put } from "redux-saga/effects";
import { statePage } from "../../store/pagination/selectors";
import Series from "../../services/series";
import {
  getAllSeriesErrorAction,
  getAllSeriesSuccessAction,
} from "../../store/series/actions";
import { stateSearch } from "../../store/search/selectors";
import { setTotal } from "../../store/pagination/actions";

function* loadAllSeries() {
  try {
    const getPage: number = yield select(statePage);
    const getSearch: string = yield select(stateSearch);
    const { data }: AxiosResponse = yield call(
      Series.getAllSeries,
      getSearch,
      getPage - 1
    );
    const newData = data.data.results;
    const newTotal = data.data.total;
    yield put(setTotal(newTotal));
    yield put(getAllSeriesSuccessAction(newData));
  } catch (error) {
    yield put(getAllSeriesErrorAction(error));
  }
}

export default loadAllSeries;
