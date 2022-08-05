import {AxiosResponse} from "axios";
import { call, select, put } from 'redux-saga/effects';
import Characters from "../../services/characters";
import {statePage} from "../../store/pagination/selectors";
import {getAllCharactersErrorAction, getAllCharactersSuccessAction} from "../../store/characters/actions";

function* loadAllCharacters() {
    try {
        const getPage: number = yield select(statePage);
        const { data }: AxiosResponse = yield call(Characters.getAllCharacters, getPage - 1);
        const newData = data.data.results;
        yield put(getAllCharactersSuccessAction(newData));
    }
    catch (error) {yield put(getAllCharactersErrorAction(error))}
}

export default loadAllCharacters