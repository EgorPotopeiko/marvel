import {createAction} from "@reduxjs/toolkit";
import {SeriesActionTypes} from "./action-types";

export const getAllSeriesStartAction: any = createAction(SeriesActionTypes.GET_ALL_SERIES_START)
export const getAllSeriesSuccessAction: any = createAction(SeriesActionTypes.GET_ALL_SERIES_SUCCESS)
export const getAllSeriesErrorAction: any = createAction(SeriesActionTypes.GET_ALL_SERIES_ERROR)
