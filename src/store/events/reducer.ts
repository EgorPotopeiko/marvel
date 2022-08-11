import {getAllEventsErrorAction, getAllEventsSuccessAction, getAllEventsStartAction, getEventErrorAction, getEventStartAction, getEventSuccessAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    events: [],
    event: {},
    total: 1,
    loading: false,
    error: null
}

export default createReducer(initialState, {
    [getAllEventsStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getAllEventsSuccessAction]: function (state: any, action: any) {
        state.events = action.payload
        state.loading = false
    },
    [getAllEventsErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    },
    [getEventStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getEventSuccessAction]: function (state: any, action: any) {
        state.event = action.payload
        state.loading = false
    },
    [getEventErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }
})