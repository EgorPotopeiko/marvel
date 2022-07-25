import {combineReducers} from "@reduxjs/toolkit";
import charactersReducer from '../store/characters/reducer';
import paginationReducer from '../store/pagination/reducer';
import comicsReducer from '../store/comics/reducer';

const rootReducer = combineReducers({
    characters: charactersReducer,
    pagination: paginationReducer,
    comics: comicsReducer
})

export default rootReducer