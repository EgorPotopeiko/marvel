import {getAllStoriesAction} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    stories: []
}

export default createReducer(initialState, {
    [getAllStoriesAction]: function (state: any, action: any) {
        state.stories = action.payload
    }
})