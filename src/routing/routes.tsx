import {PUBLIC_PATH} from "./names";
import PageCharacters from "../pages/characters/page_characters/page_characters";
import PageComics from "../pages/comics/page_comics/page_comics";
import PageCreators from "../pages/page_creators/page_creators";
import PageEvents from "../pages/page_events/page_events";
import PageSeries from "../pages/page_series/page_series";
import PageStories from "../pages/page_stories/page_stories";
import PageCharacter from "../pages/characters/page_character/page_character";
import PageComic from "../pages/comics/page_comic/page_comic";

export const userRoutes: any[] = [
    { path: PUBLIC_PATH.CHARACTERS, Component: PageCharacters, name: 'Персонажи'},
    { path: PUBLIC_PATH.CHARACTER, Component: PageCharacter, name: 'Персонаж'},
    { path: PUBLIC_PATH.COMICS, Component: PageComics, name: 'Комиксы' },
    { path: PUBLIC_PATH.COMIC, Component: PageComic, name: 'Комикс' },
    { path: PUBLIC_PATH.CREATORS, Component: PageCreators, name: 'Создатели' },
    { path: PUBLIC_PATH.EVENTS, Component: PageEvents, name: 'События' },
    { path: PUBLIC_PATH.SERIES, Component: PageSeries, name: 'Серии' },
    { path: PUBLIC_PATH.STORIES, Component: PageStories, name: 'Истории' },
]