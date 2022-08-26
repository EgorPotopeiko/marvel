import { createSelector } from "@reduxjs/toolkit";
import { TApplicationState } from "../applicationState";

const stateEvents = (state: TApplicationState) => state.events;

export const selectEvents = createSelector(stateEvents, (state) => ({
  events: state.events,
  event: state.event,
  isLoading: state.loading,
}));
