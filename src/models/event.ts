import {CharacterList, ComicList, CreatorList, EventSummary, Image, SeriesList, StoryList, Url} from "./common";

export type TEvent = {
    id: number,
    title: string,
    description: string
    resourceURI: string,
    urls: Array<Url>,
    modified: Date,
    start: Date,
    end: Date,
    thumbnail: Image,
    comics: ComicList,
    stories: StoryList,
    series: SeriesList
    characters: CharacterList,
    creators: CreatorList,
    next: EventSummary,
    previous: EventSummary
}