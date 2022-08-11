import {setPage, setTotal} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    total: 1
}

export default createReducer(initialState, {
    [setPage]: function (state: any, action: any) {
        state.page = action.payload
    },
    [setTotal]: function (state: any, action: any) {
        state.total = action.payload
    },
})