import {createSelector} from "@reduxjs/toolkit";

const stateCreators = (state: any) => state.creators;

export const selectCreators = createSelector(stateCreators, (state: any) => ({
    creators: state.creators,
    creator: state.creator,
    isLoading: state.loading,
}));