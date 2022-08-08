import {AxiosResponse} from "axios";
import { call, put } from 'redux-saga/effects';
import {
    getCreatorErrorAction,
    getCreatorSuccessAction
} from "../../store/creators/actions";
import Creators from "../../services/creators";

function* loadCreator(payload: any) {
    console.log(payload)
    const {payload: id} = payload;
    try {
        const { data }: AxiosResponse = yield call(Creators.getCreator, id);
        const newData = data.data.results;
        yield put(getCreatorSuccessAction(...newData));
    }
    catch (error) {yield put(getCreatorErrorAction(error))}
}

export default loadCreator