import {createAction} from "@reduxjs/toolkit";
import {PaginationActionTypes} from "./action-types";

export const setPage: any = createAction(PaginationActionTypes.SET_PAGE)
export const setTotal: any = createAction(PaginationActionTypes.SET_TOTAL)