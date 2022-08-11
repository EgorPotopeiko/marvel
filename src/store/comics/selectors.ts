import {createSelector} from "@reduxjs/toolkit";
import {TApplicationState} from "../applicationState";

const stateComics = (state: TApplicationState) => state.comics;

export const selectComics = createSelector(stateComics, (state) => ({
    comics: state.comics,
    comic: state.comic,
    isLoading: state.loading,
}));