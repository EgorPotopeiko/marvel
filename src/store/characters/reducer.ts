import {getAllCharactersStartAction, getAllCharactersSuccessAction, getAllCharactersErrorAction, getCharacterErrorAction, getCharacterStartAction, getCharacterSuccessAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    character: {},
    loading: false,
    error: null
}

export default createReducer(initialState, {
    [getAllCharactersStartAction]: function (state: any) {
        state.loading = true
    },
    [getAllCharactersSuccessAction]: function (state: any, action: any) {
        state.characters = action.payload
        state.loading = false
    },
    [getAllCharactersErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    },
    [getCharacterStartAction]: function (state: any) {
        state.loading = true
    },
    [getCharacterSuccessAction]: function (state: any, action: any) {
        state.character = action.payload
        state.loading = false
    },
    [getCharacterErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }
})