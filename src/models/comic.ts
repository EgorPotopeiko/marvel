import {
  CharacterList,
  ComicDate,
  ComicPrice,
  ComicSummary,
  CreatorList,
  EventList,
  Image,
  SeriesSummary,
  StoryList,
  TextObject,
  Url,
} from "./common";

export type TComic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: Array<TextObject>;
  resourceURI: string;
  urls: Array<Url>;
  series: SeriesSummary;
  variants: Array<ComicSummary>;
  collections: Array<ComicSummary>;
  collectedIssues: Array<ComicSummary>;
  dates: Array<ComicDate>;
  prices: Array<ComicPrice>;
  thumbnail: Image;
  images: Array<Image>;
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  events: EventList;
};
