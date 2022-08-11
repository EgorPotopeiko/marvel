import * as actions from "./actions";
import {createReducer} from "@reduxjs/toolkit";
import {InferValueTypes} from "../../models/common";
import {TCreator} from "../../models/creator";

const initialState = {
    creators: [],
    creator: null,
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TCreatorState = {
    creators: Array<TCreator>,
    creator: TCreator | null,
    loading: boolean,
    error: any
}

const {getAllCreatorsStartAction, getAllCreatorsSuccessAction, getAllCreatorsErrorAction, getCreatorErrorAction, getCreatorStartAction, getCreatorSuccessAction} = actions;

export default createReducer(initialState, {
    [getAllCreatorsStartAction]: function (state: TCreatorState) {
        state.loading = true
    },
    [getAllCreatorsSuccessAction]: function (state: TCreatorState, action: ActionTypes) {
        state.creators = action.payload
        state.loading = false
    },
    [getAllCreatorsErrorAction]: function (state: TCreatorState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getCreatorStartAction]: function (state: TCreatorState) {
        state.loading = true
    },
    [getCreatorSuccessAction]: function (state: TCreatorState, action: ActionTypes) {
        state.creator = action.payload
        state.loading = false
    },
    [getCreatorErrorAction]: function (state: TCreatorState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})