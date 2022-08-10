import {AxiosResponse} from "axios";
import { call, select, put } from 'redux-saga/effects';
import {statePage} from "../../store/pagination/selectors";
import Comics from "../../services/comics";
import {getAllComicsErrorAction, getAllComicsSuccessAction} from "../../store/comics/actions";
import {stateSearch} from "../../store/search/selectors";

function* loadAllComics() {
    try {
        const getPage: number = yield select(statePage);
        const getSearch: string = yield select(stateSearch)
        const { data }: AxiosResponse = yield call(Comics.getAllComics, getSearch,getPage - 1);
        const newData = data.data.results;
        yield put(getAllComicsSuccessAction(newData));
    }
    catch (error) {yield put(getAllComicsErrorAction(error))}
}

export default loadAllComics