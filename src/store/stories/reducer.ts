import {getAllStoriesStartAction, getAllStoriesSuccessAction, getAllStoriesErrorAction, getStoryErrorAction, getStoryStartAction, getStorySuccessAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    stories: [],
    story: {},
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
    },
    [getStoryStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getStorySuccessAction]: function (state: any, action: any) {
        state.story = action.payload
        state.loading = false
    },
    [getStoryErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }
})