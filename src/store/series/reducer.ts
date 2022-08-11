import * as actions from "./actions";
import {createReducer} from "@reduxjs/toolkit";
import {InferValueTypes} from "../../models/common";
import {TSeries} from "../../models/series";

const initialState = {
    series: [],
    select_series: {},
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TInitialState = {
    series: Array<TSeries>,
    select_series: TSeries | {},
    loading: boolean,
    error: any
}

const {getAllSeriesErrorAction, getAllSeriesSuccessAction, getAllSeriesStartAction, getSeriesErrorAction, getSeriesStartAction, getSeriesSuccessAction} = actions

export default createReducer(initialState, {
    [getAllSeriesStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getAllSeriesSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.series = action.payload
        state.loading = false
    },
    [getAllSeriesErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getSeriesStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getSeriesSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.select_series = action.payload
        state.loading = false
    },
    [getSeriesErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }
})