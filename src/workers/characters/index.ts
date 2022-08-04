import {CharactersActionTypes} from "../../store/characters/action-types";
import loadAllCharacters from "./load_all_characters";
import { takeLatest } from 'redux-saga/effects';
import loadCharacter from "./load_character";

export function* charactersSaga() {
    yield takeLatest(CharactersActionTypes.GET_ALL_CHARACTERS_START, loadAllCharacters);
    yield takeLatest(CharactersActionTypes.GET_CHARACTER_START, loadCharacter);
}