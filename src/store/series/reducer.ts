import {getAllSeriesErrorAction, getAllSeriesSuccessAction, getAllSeriesStartAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    series: [],
    loading: false,
    error: null
}

export default createReducer(initialState, {
    [getAllSeriesStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getAllSeriesSuccessAction]: function (state: any, action: any) {
        state.series = action.payload
        state.loading = false
    },
    [getAllSeriesErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }
})