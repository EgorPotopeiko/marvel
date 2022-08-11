import {getAllComicsErrorAction, getAllComicsSuccessAction, getAllComicsStartAction, getComicErrorAction, getComicStartAction, getComicSuccessAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    comics: [],
    comic: {},
    total: 1,
    loading: false,
    error: null
}

export default createReducer(initialState, {
    [getAllComicsStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getAllComicsSuccessAction]: function (state: any, action: any) {
        state.comics = action.payload
        state.loading = false
    },
    [getAllComicsErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    },
    [getComicStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getComicSuccessAction]: function (state: any, action: any) {
        state.comic = action.payload
        state.loading = false
    },
    [getComicErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }

})