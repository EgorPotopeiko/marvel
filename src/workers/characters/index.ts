import {CharactersActionTypes} from "../../store/characters/action-types";
import loadAllCharacters from "./load_all_characters";
import { takeLatest } from 'redux-saga/effects';

export function* charactersSaga() {
    yield takeLatest(CharactersActionTypes.GET_ALL_CHARACTERS_START, loadAllCharacters);
}