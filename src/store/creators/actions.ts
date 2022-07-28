import {createAction} from "@reduxjs/toolkit";
import {CreatorsActionTypes} from "./action-types";

export const getAllCreatorsStartAction: any = createAction(CreatorsActionTypes.GET_ALL_CREATORS_START)
export const getAllCreatorsSuccessAction: any = createAction(CreatorsActionTypes.GET_ALL_CREATORS_SUCCESS)
export const getAllCreatorsErrorAction: any = createAction(CreatorsActionTypes.GET_ALL_CREATORS_ERROR)