import {getAllComicsErrorAction, getAllComicsSuccessAction, getAllComicsStartAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    comics: [],
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
    }

})