export type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never

export type Url = {
    type: string,
    url: string
}

export type Image = {
    path: string,
    extension: string
}

export type TextObject = {
    type: string,
    language: string,
    text: string
}

export type ComicSummary = {
    resourceURI: string,
    name: string
}

export type ComicDate = {
    type: string,
    date: Date
}

export type ComicPrice = {
    type: string,
    price: number
}

export type StoryList = {
    available: number,
    returned: number,
    collectionURI: string,
    items: Array<StorySummary>
}

export type StorySummary = {
    resourceURI: string,
    name: string,
    type: string
}

export type CreatorList = {
    available: number,
    returned: number,
    collectionURI: string,
    items: Array<CreatorSummary>
}

export type CreatorSummary = {
    resourceURI: string,
    name: string,
    role: string
}

export type CharacterList = {
    available: number,
    returned: number,
    collectionURI: string,
    items: Array<CharacterSummary>
}

export type CharacterSummary = {
    resourceURI: string,
    name: string,
    role: string
}

export type EventList = {
    available: number,
    returned: number,
    collectionURI: string,
    items: Array<EventSummary>
}

export type EventSummary = {
    resourceURI: string,
    name: string
}

export type SeriesSummary = {
    resourceURI: string,
    name: string
}

export type ComicList = {
    available: number,
    returned: number,
    collectionURI: string,
    items: Array<ComicSummary>
}

export type SeriesList = {
    available: number,
    returned: number,
    collectionURI: string,
    items: Array<SeriesSummary>
}