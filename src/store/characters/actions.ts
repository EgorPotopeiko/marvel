import {createAction} from "@reduxjs/toolkit";
import {CharactersActionTypes} from "./action-types";

export const getAllCharactersAction: any = createAction(CharactersActionTypes.GET_ALL_CHARACTERS)