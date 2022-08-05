import {createSelector} from "@reduxjs/toolkit";

const stateComics = (state: any) => state.comics;

export const selectComics = createSelector(stateComics, (state: any) => ({
    comics: state.comics,
    comic: state.comic,
    isLoading: state.loading,
}));