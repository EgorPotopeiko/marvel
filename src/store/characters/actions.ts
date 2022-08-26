import { createAction } from "@reduxjs/toolkit";
import { CharactersActionTypes } from "./action-types";

export const getAllCharactersStartAction: any = createAction(
  CharactersActionTypes.GET_ALL_CHARACTERS_START
);
export const getAllCharactersSuccessAction: any = createAction(
  CharactersActionTypes.GET_ALL_CHARACTERS_SUCCESS
);
export const getAllCharactersErrorAction: any = createAction(
  CharactersActionTypes.GET_ALL_CHARACTERS_ERROR
);

export const getCharacterStartAction: any = createAction(
  CharactersActionTypes.GET_CHARACTER_START
);
export const getCharacterSuccessAction: any = createAction(
  CharactersActionTypes.GET_CHARACTER_SUCCESS
);
export const getCharacterErrorAction: any = createAction(
  CharactersActionTypes.GET_CHARACTER_ERROR
);
