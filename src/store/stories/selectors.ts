import {createSelector} from "@reduxjs/toolkit";

const stateStories = (state: any) => state.stories;

export const selectStories = createSelector(stateStories, (state: any) => ({
    stories: state.stories,
    isLoading: state.loading,
}));