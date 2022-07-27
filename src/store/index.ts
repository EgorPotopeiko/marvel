import {combineReducers} from "@reduxjs/toolkit";
import charactersReducer from '../store/characters/reducer';
import paginationReducer from '../store/pagination/reducer';
import comicsReducer from '../store/comics/reducer';
import creatorsReducer from '../store/creators/reducer';
import eventsReducer from '../store/events/reducer';
import seriesReducer from '../store/series/reducer';
import storiesReducer from '../store/stories/reducer';
import { History } from 'history';

const rootReducer = (history: History) => combineReducers({
    characters: charactersReducer,
    pagination: paginationReducer,
    comics: comicsReducer,
    creators: creatorsReducer,
    events: eventsReducer,
    series: seriesReducer,
    stories: storiesReducer
})

export default rootReducer