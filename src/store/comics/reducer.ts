import * as actions from './actions';
import {createReducer} from "@reduxjs/toolkit";
import {InferValueTypes} from "../../models/common";
import {TComic} from "../../models/comic";

const initialState = {
    comics: [],
    comic: {},
    loading: false,
    error: null
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type TInitialState = {
    comics: Array<TComic>,
    comic: TComic | {},
    loading: boolean,
    error: any
}

const {getComicStartAction, getComicSuccessAction, getComicErrorAction, getAllComicsErrorAction, getAllComicsSuccessAction, getAllComicsStartAction} = actions;

export default createReducer(initialState, {
    [getAllComicsStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getAllComicsSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.comics = action.payload
        state.loading = false
    },
    [getAllComicsErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    },
    [getComicStartAction]: function (state: TInitialState) {
        state.loading = true
    },
    [getComicSuccessAction]: function (state: TInitialState, action: ActionTypes) {
        state.comic = action.payload
        state.loading = false
    },
    [getComicErrorAction]: function (state: TInitialState, action: ActionTypes) {
        state.error = action.payload
        state.loading = false
    }

})