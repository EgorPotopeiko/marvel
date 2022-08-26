import { createAction } from "@reduxjs/toolkit";
import { EventsActionTypes } from "./action-types";

export const getAllEventsStartAction: any = createAction(
  EventsActionTypes.GET_ALL_EVENTS_START
);
export const getAllEventsSuccessAction: any = createAction(
  EventsActionTypes.GET_ALL_EVENTS_SUCCESS
);
export const getAllEventsErrorAction: any = createAction(
  EventsActionTypes.GET_ALL_EVENTS_ERROR
);

export const getEventStartAction: any = createAction(
  EventsActionTypes.GET_EVENT_START
);
export const getEventSuccessAction: any = createAction(
  EventsActionTypes.GET_EVENT_SUCCESS
);
export const getEventErrorAction: any = createAction(
  EventsActionTypes.GET_EVENT_ERROR
);
