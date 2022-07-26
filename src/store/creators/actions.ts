import {createAction} from "@reduxjs/toolkit";
import {CreatorsActionTypes} from "./action-types";

export const getAllCreatorsAction: any = createAction(CreatorsActionTypes.GET_ALL_CREATORS)