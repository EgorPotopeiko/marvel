import {AxiosResponse} from "axios";
import { call, select, put } from 'redux-saga/effects';
import {statePage} from "../../store/pagination/selectors";
import {getAllCreatorsErrorAction, getAllCreatorsSuccessAction} from "../../store/creators/actions";
import Creators from "../../services/creators";

function* loadAllCreators() {
    try {
        const getPage: number = yield select(statePage);
        const { data }: AxiosResponse = yield call(Creators.getAllCreators, getPage - 1);
        const newData = data.data.results;
        yield put(getAllCreatorsSuccessAction(newData));
    }
    catch (error) {yield put(getAllCreatorsErrorAction(error))}
}

export default loadAllCreators