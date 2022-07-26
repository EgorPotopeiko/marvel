import {getAllEventsAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    events: []
}

export default createReducer(initialState, {
    [getAllEventsAction]: function (state: any, action: any) {
        state.events = action.payload
    }
})