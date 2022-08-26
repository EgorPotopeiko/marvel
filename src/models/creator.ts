import {
  EventList,
  StoryList,
  Url,
  Image,
  ComicList,
  SeriesList,
} from "./common";

export type TCreator = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: Date;
  resourceURI: string;
  urls: Array<Url>;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
};
