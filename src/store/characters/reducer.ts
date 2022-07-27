import {getAllCharactersStartAction, getAllCharactersSuccessAction, getAllCharactersErrorAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    characters: [],
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
    }
})