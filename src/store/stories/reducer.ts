import * as actions from "./actions";
import {createReducer} from "@reduxjs/toolkit";
import {InferValueTypes} from "../../models/common";
import {TStory} from "../../models/story";

const initialState = {
    stories: [],
    story: {},
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TInitialState = {
    stories: Array<TStory>,
    story: TStory | {},
    loading: boolean,
    error: any
}

const {getAllStoriesStartAction, getAllStoriesSuccessAction, getAllStoriesErrorAction, getStoryErrorAction, getStoryStartAction, getStorySuccessAction} = actions;

export default createReducer(initialState, {
    [getAllStoriesStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getAllStoriesSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.stories = action.payload
        state.loading = false
    },
    [getAllStoriesErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getStoryStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getStorySuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.story = action.payload
        state.loading = false
    },
    [getStoryErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})