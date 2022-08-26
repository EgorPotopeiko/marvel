import { createSelector } from "@reduxjs/toolkit";
import { TApplicationState } from "../applicationState";

const stateCharacters = (state: TApplicationState) => state.characters;

export const selectCharacters = createSelector(stateCharacters, (state) => ({
  characters: state.characters,
  character: state.character,
  isLoading: state.loading,
}));
