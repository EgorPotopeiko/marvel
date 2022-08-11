import {AxiosResponse} from "axios";
import { call, select, put } from 'redux-saga/effects';
import Characters from "../../services/characters";
import {statePage} from "../../store/pagination/selectors";
import {getAllCharactersErrorAction, getAllCharactersSuccessAction} from "../../store/characters/actions";
import {stateSearch} from "../../store/search/selectors";
import {setTotal} from "../../store/pagination/actions";

function* loadAllCharacters() {
    try {
        const getPage: number = yield select(statePage);
        const getSearch: string = yield select(stateSearch);
        const { data }: AxiosResponse = yield call(Characters.getAllCharacters, getSearch, getPage - 1);
        const newData = data.data.results;
        const newTotal = data.data.total;
        yield put(setTotal(newTotal));
        yield put(getAllCharactersSuccessAction(newData));
    }
    catch (error) {yield put(getAllCharactersErrorAction(error))}
}

export default loadAllCharacters