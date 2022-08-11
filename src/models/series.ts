import {
    CharacterList,
    ComicList,
    CreatorList,
    EventList,
    EventSummary,
    Image,
    StoryList,
    Url
} from "./common";

export type TSeries = {
    id: number,
    title: string,
    description: string
    resourceURI: string,
    urls: Array<Url>,
    startYear: Date,
    endYear: Date,
    rating: string,
    modified: Date,
    thumbnail: Image,
    comics: ComicList,
    stories: StoryList,
    events: EventList
    characters: CharacterList,
    creators: CreatorList,
    next: EventSummary,
    previous: EventSummary
}