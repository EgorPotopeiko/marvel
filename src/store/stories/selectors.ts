import { createSelector } from "@reduxjs/toolkit";
import { TApplicationState } from "../applicationState";

const stateStories = (state: TApplicationState) => state.stories;

export const selectStories = createSelector(stateStories, (state) => ({
  stories: state.stories,
  story: state.story,
  isLoading: state.loading,
}));
