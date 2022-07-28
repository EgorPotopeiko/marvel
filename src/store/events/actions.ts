import {createAction} from "@reduxjs/toolkit";
import {EventsActionTypes} from "./action-types";

export const getAllEventsStartAction: any = createAction(EventsActionTypes.GET_ALL_EVENTS_START)
export const getAllEventsSuccessAction: any = createAction(EventsActionTypes.GET_ALL_EVENTS_SUCCESS)
export const getAllEventsErrorAction: any = createAction(EventsActionTypes.GET_ALL_EVENTS_ERROR)