import {getAllCreatorsStartAction, getAllCreatorsSuccessAction, getAllCreatorsErrorAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    creators: [],
    loading: false,
    error: null
}

export default createReducer(initialState, {
    [getAllCreatorsStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getAllCreatorsSuccessAction]: function (state: any, action: any) {
        state.creators = action.payload
        state.loading = false
    },
    [getAllCreatorsErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }
})