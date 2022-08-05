import {createSelector} from "@reduxjs/toolkit";

const stateEvents = (state: any) => state.events;

export const selectEvents = createSelector(stateEvents, (state: any) => ({
    events: state.events,
    event: state.event,
    isLoading: state.loading,
}));