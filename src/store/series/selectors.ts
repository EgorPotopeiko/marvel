import {createSelector} from "@reduxjs/toolkit";
import {TApplicationState} from "../applicationState";

const stateSeries = (state: TApplicationState) => state.series;

export const selectSeries = createSelector(stateSeries, (state) => ({
    series: state.series,
    select_series: state.select_series,
    isLoading: state.loading,
}));