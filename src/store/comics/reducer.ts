import {getAllComicsAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    comics: []
}

export default createReducer(initialState, {
    [getAllComicsAction]: function (state: any, action: any) {
        state.comics = action.payload
    }
})