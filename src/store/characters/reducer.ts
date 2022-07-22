import {getAllCharactersAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    characters: []
}

export default createReducer(initialState, {
    [getAllCharactersAction]: function (state: any, action: any) {
        state.characters = action.payload
    }
})