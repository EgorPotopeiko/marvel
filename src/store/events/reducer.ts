import * as actions from "../events/actions";
import {createReducer} from "@reduxjs/toolkit";
import {InferValueTypes} from "../../models/common";
import {TEvent} from "../../models/event";

const initialState = {
    events: [],
    event: {},
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TInitialState = {
    events: Array<TEvent>,
    event: TEvent | {},
    loading: boolean,
    error: any
}

const {getAllEventsErrorAction, getAllEventsSuccessAction, getAllEventsStartAction, getEventErrorAction, getEventStartAction, getEventSuccessAction} = actions;

export default createReducer(initialState, {
    [getAllEventsStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getAllEventsSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.events = action.payload
        state.loading = false
    },
    [getAllEventsErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getEventStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getEventSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.event = action.payload
        state.loading = false
    },
    [getEventErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})