import {getAllCreatorsAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    creators: []
}

export default createReducer(initialState, {
    [getAllCreatorsAction]: function (state: any, action: any) {
        state.creators = action.payload
    }
})