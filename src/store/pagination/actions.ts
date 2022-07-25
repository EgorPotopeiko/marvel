import {createAction} from "@reduxjs/toolkit";
import {PaginationActionTypes} from "./action-types";

export const setPage: any = createAction(PaginationActionTypes.SET_PAGE)