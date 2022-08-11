import * as actions from './actions';
import {createReducer} from "@reduxjs/toolkit";
import {TCharacter} from "../../models/character";
import {InferValueTypes} from "../../models/common";

const initialState = {
    characters: [],
    character: null,
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TCharacterState = {
    characters: Array<TCharacter>,
    character: TCharacter | null,
    loading: boolean,
    error: any
}

const {getAllCharactersStartAction, getAllCharactersSuccessAction, getAllCharactersErrorAction, getCharacterErrorAction, getCharacterStartAction, getCharacterSuccessAction} = actions;

export default createReducer(initialState, {
    [getAllCharactersStartAction]: function (state: TCharacterState) {
        state.loading = true
    },
    [getAllCharactersSuccessAction]: function (state: TCharacterState, action: ActionTypes) {
        state.characters = action.payload
        state.loading = false
    },
    [getAllCharactersErrorAction]: function (state: TCharacterState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getCharacterStartAction]: function (state: TCharacterState) {
        state.loading = true
    },
    [getCharacterSuccessAction]: function (state: TCharacterState, action: ActionTypes) {
        state.character = action.payload
        state.loading = false
    },
    [getCharacterErrorAction]: function (state: TCharacterState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})