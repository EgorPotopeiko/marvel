import * as actions from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { InferValueTypes } from "../../models/common";
import { TComic } from "../../models/comic";

const initialState = {
  comics: [],
  comic: null,
  loading: false,
  error: null,
};

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type TComicState = {
  comics: Array<TComic>;
  comic: TComic | null;
  loading: boolean;
  error: any;
};

const {
  getComicStartAction,
  getComicSuccessAction,
  getComicErrorAction,
  getAllComicsErrorAction,
  getAllComicsSuccessAction,
  getAllComicsStartAction,
} = actions;

export default createReducer(initialState, {
  [getAllComicsStartAction]: function (state: TComicState) {
    state.loading = true;
  },
  [getAllComicsSuccessAction]: function (
    state: TComicState,
    action: ActionTypes
  ) {
    state.comics = action.payload;
    state.loading = false;
  },
  [getAllComicsErrorAction]: function (
    state: TComicState,
    action: ActionTypes
  ) {
    state.error = action.payload;
    state.loading = false;
  },
  [getComicStartAction]: function (state: TComicState) {
    state.loading = true;
  },
  [getComicSuccessAction]: function (state: TComicState, action: ActionTypes) {
    state.comic = action.payload;
    state.loading = false;
  },
  [getComicErrorAction]: function (state: TComicState, action: ActionTypes) {
    state.error = action.payload;
    state.loading = false;
  },
});
