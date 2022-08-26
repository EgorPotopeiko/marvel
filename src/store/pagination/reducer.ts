import * as actions from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { InferValueTypes } from "../../models/common";

const initialState = {
  page: 1,
  total: 1,
};

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type TPaginationState = {
  page: number;
  total: number;
};

const { setPage, setTotal } = actions;

export default createReducer(initialState, {
  [setPage]: function (state: TPaginationState, action: ActionTypes) {
    state.page = action.payload;
  },
  [setTotal]: function (state: TPaginationState, action: ActionTypes) {
    state.total = action.payload;
  },
});
