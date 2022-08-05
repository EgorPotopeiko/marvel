import {createSelector} from "@reduxjs/toolkit";

const stateSeries = (state: any) => state.series;

export const selectSeries = createSelector(stateSeries, (state: any) => ({
    series: state.series,
    select_series: state.select_series,
    isLoading: state.loading,
}));