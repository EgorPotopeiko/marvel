import {createSelector} from "@reduxjs/toolkit";
import {TApplicationState} from "../applicationState";

const stateCreators = (state: TApplicationState) => state.creators;

export const selectCreators = createSelector(stateCreators, (state) => ({
    creators: state.creators,
    creator: state.creator,
    isLoading: state.loading,
}));