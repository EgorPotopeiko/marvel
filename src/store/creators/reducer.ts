import * as actions from "./actions";
import {createReducer} from "@reduxjs/toolkit";
import {InferValueTypes} from "../../models/common";
import {TCreator} from "../../models/creator";

const initialState = {
    creators: [],
    creator: {},
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TInitialState = {
    creators: Array<TCreator>,
    creator: TCreator | {},
    loading: boolean,
    error: any
}

const {getAllCreatorsStartAction, getAllCreatorsSuccessAction, getAllCreatorsErrorAction, getCreatorErrorAction, getCreatorStartAction, getCreatorSuccessAction} = actions;

export default createReducer(initialState, {
    [getAllCreatorsStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getAllCreatorsSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.creators = action.payload
        state.loading = false
    },
    [getAllCreatorsErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getCreatorStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getCreatorSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.creator = action.payload
        state.loading = false
    },
    [getCreatorErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})