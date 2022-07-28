import {getAllStoriesStartAction, getAllStoriesSuccessAction, getAllStoriesErrorAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    stories: [],
    loading: false,
    error: null
}

export default createReducer(initialState, {
    [getAllStoriesStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getAllStoriesSuccessAction]: function (state: any, action: any) {
        state.stories = action.payload
        state.loading = false
    },
    [getAllStoriesErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }
})