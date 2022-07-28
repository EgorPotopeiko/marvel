import {getAllEventsErrorAction, getAllEventsSuccessAction, getAllEventsStartAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    events: [],
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
    }
})