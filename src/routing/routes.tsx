import { PUBLIC_PATH } from "./names";
import PageCharacters from "../pages/characters/page_characters/page_characters";
import PageComics from "../pages/comics/page_comics/page_comics";
import PageCreators from "../pages/creators/page_creators/page_creators";
import PageEvents from "../pages/events/page_events/page_events";
import PageSeries from "../pages/series/page_series/page_series";
import PageStories from "../pages/stories/page_stories/page_stories";
import PageCharacter from "../pages/characters/page_character/page_character";
import PageComic from "../pages/comics/page_comic/page_comic";
import PageCreator from "../pages/creators/page_creator/page_creator";
import PageEvent from "../pages/events/page_event/page_event";
import PageSeriesOne from "../pages/series/page_series-one/page_series-one";
import PageStory from "../pages/stories/page_story/page_story";
import { TRoutes } from "../models/routes";

export const userRoutes: TRoutes[] = [
  {
    path: PUBLIC_PATH.CHARACTERS,
    Component: PageCharacters,
    name: "Персонажи",
  },
  { path: PUBLIC_PATH.CHARACTER, Component: PageCharacter, name: "Персонаж" },
  { path: PUBLIC_PATH.COMICS, Component: PageComics, name: "Комиксы" },
  { path: PUBLIC_PATH.COMIC, Component: PageComic, name: "Комикс" },
  { path: PUBLIC_PATH.CREATORS, Component: PageCreators, name: "Создатели" },
  { path: PUBLIC_PATH.CREATOR, Component: PageCreator, name: "Создатель" },
  { path: PUBLIC_PATH.EVENTS, Component: PageEvents, name: "События" },
  { path: PUBLIC_PATH.EVENT, Component: PageEvent, name: "Событие" },
  { path: PUBLIC_PATH.SERIES, Component: PageSeries, name: "Серии" },
  { path: PUBLIC_PATH.SERIES_ONE, Component: PageSeriesOne, name: "Серия" },
  { path: PUBLIC_PATH.STORIES, Component: PageStories, name: "Истории" },
  { path: PUBLIC_PATH.STORY, Component: PageStory, name: "История" },
];
