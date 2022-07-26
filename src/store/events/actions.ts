import {createAction} from "@reduxjs/toolkit";
import {EventsActionTypes} from "./action-types";

export const getAllEventsAction: any = createAction(EventsActionTypes.GET_ALL_EVENTS)