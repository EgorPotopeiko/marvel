import {ComicList, EventList, SeriesList, StoryList, Url, Image} from "./common";

export type TCharacter = {
    id: number,
    name: string,
    description: string
    modified: Date,
    resourceURI: string,
    urls: Array<Url>,
    thumbnail: Image,
    comics: ComicList,
    stories: StoryList,
    events: EventList,
    series: SeriesList
}
