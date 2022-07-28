import {createAction} from "@reduxjs/toolkit";
import {StoriesActionTypes} from "./action-types";

export const getAllStoriesStartAction: any = createAction(StoriesActionTypes.GET_ALL_STORIES_START)
export const getAllStoriesSuccessAction: any = createAction(StoriesActionTypes.GET_ALL_STORIES_SUCCESS)
export const getAllStoriesErrorAction: any = createAction(StoriesActionTypes.GET_ALL_STORIES_ERROR)