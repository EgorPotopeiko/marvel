import {combineReducers} from "@reduxjs/toolkit";
import charactersReducer from '../store/characters/reducer'

const rootReducer = combineReducers({
    characters: charactersReducer
})

export default rootReducer