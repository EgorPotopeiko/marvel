import {AxiosResponse} from "axios";
import { call, put } from 'redux-saga/effects';
import Series from "../../services/series";
import {
    getSeriesErrorAction,
    getSeriesSuccessAction
} from "../../store/series/actions";

function* loadSeries({payload: id}: any) {
    try {
        const { data }: AxiosResponse = yield call(Series.getSeries, id);
        const newData = data.data.results;
        yield put(getSeriesSuccessAction(...newData));
    }
    catch (error) {yield put(getSeriesErrorAction(error))}
}

export default loadSeries