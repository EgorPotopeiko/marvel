import {AxiosResponse} from "axios";
import { call, put } from 'redux-saga/effects';
import Characters from "../../services/characters";
import {
    getCharacterErrorAction,
    getCharacterSuccessAction
} from "../../store/characters/actions";

function* loadCharacter({payload: id}: any) {
    try {
        const { data }: AxiosResponse = yield call(Characters.getCharacter, id);
        const newData = data.data.results;
        yield put(getCharacterSuccessAction(...newData));
    }
    catch (error) {yield put(getCharacterErrorAction(error))}
}

export default loadCharacter