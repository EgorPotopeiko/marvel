import {setSearch} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    search: null
}

export default createReducer(initialState, {
    [setSearch]: function (state: any, action: any) {
        state.search = action.payload
    }
})