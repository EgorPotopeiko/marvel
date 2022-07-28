import {createAction} from "@reduxjs/toolkit";
import {ComicsActionTypes} from "./action-types";

export const getAllComicsStartAction: any = createAction(ComicsActionTypes.GET_ALL_COMICS_START)
export const getAllComicsSuccessAction: any = createAction(ComicsActionTypes.GET_ALL_COMICS_SUCCESS)
export const getAllComicsErrorAction: any = createAction(ComicsActionTypes.GET_ALL_COMICS_ERROR)
