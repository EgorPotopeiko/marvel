import {AxiosResponse} from "axios";
import { call, put } from 'redux-saga/effects';
import Comics from "../../services/comics";
import {
    getComicErrorAction,
    getComicSuccessAction
} from "../../store/comics/actions";

function* loadComic(id: any) {
    try {
        const { data }: AxiosResponse = yield call(Comics.getComic, id);
        const newData = data.data.results;
        yield put(getComicSuccessAction(newData));
    }
    catch (error) {yield put(getComicErrorAction(error))}
}

export default loadComic