import {ComicList, EventList, SeriesList, Image, CharacterList, CreatorList, ComicSummary} from "./common";

export type TStory = {
    id: number,
    title: string,
    description: string
    resourceURI: string,
    type: string,
    modified: Date,
    thumbnail: Image,
    comics: ComicList,
    series: SeriesList,
    events: EventList,
    characters: CharacterList,
    creators: CreatorList,
    originalissue: ComicSummary
}
