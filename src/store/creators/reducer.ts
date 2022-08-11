import {getAllCreatorsStartAction, getAllCreatorsSuccessAction, getAllCreatorsErrorAction, getCreatorErrorAction, getCreatorStartAction, getCreatorSuccessAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    creators: [],
    creator: {},
    total: 1,
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
    },
    [getCreatorStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getCreatorSuccessAction]: function (state: any, action: any) {
        state.creator = action.payload
        state.loading = false
    },
    [getCreatorErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }
})