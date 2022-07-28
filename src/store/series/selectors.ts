import {createSelector} from "@reduxjs/toolkit";

const stateSeries = (state: any) => state.series;

export const selectSeries = createSelector(stateSeries, (state: any) => ({
    series: state.series,
    isLoading: state.loading,
}));