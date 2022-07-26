import {createAction} from "@reduxjs/toolkit";
import {SeriesActionTypes} from "./action-types";

export const getAllSeriesAction: any = createAction(SeriesActionTypes.GET_ALL_SERIES)