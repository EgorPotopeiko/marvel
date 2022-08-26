import * as actions from "../events/actions";
import { createReducer } from "@reduxjs/toolkit";
import { InferValueTypes } from "../../models/common";
import { TEvent } from "../../models/event";

const initialState = {
  events: [],
  event: null,
  loading: false,
  error: null,
};

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type TEventState = {
  events: Array<TEvent>;
  event: TEvent | null;
  loading: boolean;
  error: any;
};

const {
  getAllEventsErrorAction,
  getAllEventsSuccessAction,
  getAllEventsStartAction,
  getEventErrorAction,
  getEventStartAction,
  getEventSuccessAction,
} = actions;

export default createReducer(initialState, {
  [getAllEventsStartAction]: function (state: TEventState) {
    state.loading = true;
  },
  [getAllEventsSuccessAction]: function (
    state: TEventState,
    action: ActionTypes
  ) {
    state.events = action.payload;
    state.loading = false;
  },
  [getAllEventsErrorAction]: function (
    state: TEventState,
    action: ActionTypes
  ) {
    state.error = action.payload;
    state.loading = false;
  },
  [getEventStartAction]: function (state: TEventState) {
    state.loading = true;
  },
  [getEventSuccessAction]: function (state: TEventState, action: ActionTypes) {
    state.event = action.payload;
    state.loading = false;
  },
  [getEventErrorAction]: function (state: TEventState, action: ActionTypes) {
    state.error = action.payload;
    state.loading = false;
  },
});
