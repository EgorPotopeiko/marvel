import * as actions from "./actions";
import {createReducer} from "@reduxjs/toolkit";
import {InferValueTypes} from "../../models/common";
import {TSeries} from "../../models/series";

const initialState = {
    series: [],
    select_series: null,
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TSeriesState = {
    series: Array<TSeries>,
    select_series: TSeries | null,
    loading: boolean,
    error: any
}

const {getAllSeriesErrorAction, getAllSeriesSuccessAction, getAllSeriesStartAction, getSeriesErrorAction, getSeriesStartAction, getSeriesSuccessAction} = actions

export default createReducer(initialState, {
    [getAllSeriesStartAction]: function (state: TSeriesState) {
        state.loading = true
    },
    [getAllSeriesSuccessAction]: function (state: TSeriesState, action: ActionTypes) {
        state.series = action.payload
        state.loading = false
    },
    [getAllSeriesErrorAction]: function (state: TSeriesState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getSeriesStartAction]: function (state: TSeriesState) {
        state.loading = true
    },
    [getSeriesSuccessAction]: function (state: TSeriesState, action: ActionTypes) {
        state.select_series = action.payload
        state.loading = false
    },
    [getSeriesErrorAction]: function (state: TSeriesState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})