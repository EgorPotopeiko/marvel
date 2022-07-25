import {createAction} from "@reduxjs/toolkit";
import {ComicsActionTypes} from "./action-types";

export const getAllComicsAction: any = createAction(ComicsActionTypes.GET_ALL_COMICS)