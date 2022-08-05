import {createAction} from "@reduxjs/toolkit";
import {CreatorsActionTypes} from "./action-types";

export const getAllCreatorsStartAction: any = createAction(CreatorsActionTypes.GET_ALL_CREATORS_START)
export const getAllCreatorsSuccessAction: any = createAction(CreatorsActionTypes.GET_ALL_CREATORS_SUCCESS)
export const getAllCreatorsErrorAction: any = createAction(CreatorsActionTypes.GET_ALL_CREATORS_ERROR)

export const getCreatorStartAction: any = createAction(CreatorsActionTypes.GET_CREATOR_START)
export const getCreatorSuccessAction: any = createAction(CreatorsActionTypes.GET_CREATOR_SUCCESS)
export const getCreatorErrorAction: any = createAction(CreatorsActionTypes.GET_CREATOR_ERROR)