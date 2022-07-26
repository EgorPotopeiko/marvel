import {createAction} from "@reduxjs/toolkit";
import {StoriesActionTypes} from "./action-types";

export const getAllStoriesAction: any = createAction(StoriesActionTypes.GET_ALL_STORIES)