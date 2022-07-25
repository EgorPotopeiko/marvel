import {setPage} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    page: 1
}

export default createReducer(initialState, {
    [setPage]: function (state: any, action: any) {
        state.page = action.payload
    }
})