import * as actions from './actions';
import {createReducer} from "@reduxjs/toolkit";
import {TCharacter} from "../../models/character";
import {InferValueTypes} from "../../models/common";

const initialState = {
    characters: [],
    character: {},
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TInitialState = {
    characters: Array<TCharacter>,
    character: TCharacter | {},
    loading: boolean,
    error: any
}

const {getAllCharactersStartAction, getAllCharactersSuccessAction, getAllCharactersErrorAction, getCharacterErrorAction, getCharacterStartAction, getCharacterSuccessAction} = actions;

export default createReducer(initialState, {
    [getAllCharactersStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getAllCharactersSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.characters = action.payload
        state.loading = false
    },
    [getAllCharactersErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getCharacterStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getCharacterSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.character = action.payload
        state.loading = false
    },
    [getCharacterErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})