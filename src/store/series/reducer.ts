import {getAllSeriesErrorAction, getAllSeriesSuccessAction, getAllSeriesStartAction, getSeriesErrorAction, getSeriesStartAction, getSeriesSuccessAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    series: [],
    select_series: {},
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
    },
    [getSeriesStartAction]: function (state: any, action: any) {
        state.loading = true
    },
    [getSeriesSuccessAction]: function (state: any, action: any) {
        state.select_series = action.payload
        state.loading = false
    },
    [getSeriesErrorAction]: function (state: any, action: any) {
        state.error = action.payload
        state.loading = false
    }
})