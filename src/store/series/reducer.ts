import {getAllSeriesAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    series: []
}

export default createReducer(initialState, {
    [getAllSeriesAction]: function (state: any, action: any) {
        state.series = action.payload
    }
})