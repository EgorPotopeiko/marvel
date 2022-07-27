import {createAction} from "@reduxjs/toolkit";
import {CharactersActionTypes} from "./action-types";

export const getAllCharactersStartAction: any = createAction(CharactersActionTypes.GET_ALL_CHARACTERS_START)
export const getAllCharactersSuccessAction: any = createAction(CharactersActionTypes.GET_ALL_CHARACTERS_SUCCESS)
export const getAllCharactersErrorAction: any = createAction(CharactersActionTypes.GET_ALL_CHARACTERS_ERROR)