import * as actions from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { InferValueTypes } from "../../models/common";

const initialState = {
  search: null,
};

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type TSearchState = {
  search: string | null;
};

const { setSearch } = actions;

export default createReducer(initialState, {
  [setSearch]: function (state: TSearchState, action: ActionTypes) {
    state.search = action.payload;
  },
});
