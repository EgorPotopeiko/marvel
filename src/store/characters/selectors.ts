import {createSelector} from "@reduxjs/toolkit";

const stateCharacters = (state: any) => state.characters;

export const selectCharacters = createSelector(stateCharacters, (state: any) => ({
    characters: state.characters,
    isLoading: state.loading,
}));