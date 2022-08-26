import { createAction } from "@reduxjs/toolkit";
import { SearchActionTypes } from "./action-types";

export const setSearch: any = createAction(SearchActionTypes.SET_SEARCH);
