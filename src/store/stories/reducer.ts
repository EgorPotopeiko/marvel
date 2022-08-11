import * as actions from "./actions";
import {createReducer} from "@reduxjs/toolkit";
import {InferValueTypes} from "../../models/common";
import {TStory} from "../../models/story";

const initialState = {
    stories: [],
    story: null,
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TStoriesState = {
    stories: Array<TStory>,
    story: TStory | null,
    loading: boolean,
    error: any
}

const {getAllStoriesStartAction, getAllStoriesSuccessAction, getAllStoriesErrorAction, getStoryErrorAction, getStoryStartAction, getStorySuccessAction} = actions;

export default createReducer(initialState, {
    [getAllStoriesStartAction]: function (state: TStoriesState) {
        state.loading = true
    },
    [getAllStoriesSuccessAction]: function (state: TStoriesState, action: ActionTypes) {
        state.stories = action.payload
        state.loading = false
    },
    [getAllStoriesErrorAction]: function (state: TStoriesState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getStoryStartAction]: function (state: TStoriesState) {
        state.loading = true
    },
    [getStorySuccessAction]: function (state: TStoriesState, action: ActionTypes) {
        state.story = action.payload
        state.loading = false
    },
    [getStoryErrorAction]: function (state: TStoriesState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})