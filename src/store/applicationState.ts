import { TCharacterState } from "./characters/reducer";
import { TComicState } from "./comics/reducer";
import { TCreatorState } from "./creators/reducer";
import { TEventState } from "./events/reducer";
import { TSeriesState } from "./series/reducer";
import { TStoriesState } from "./stories/reducer";
import { TPaginationState } from "./pagination/reducer";
import { TSearchState } from "./search/reducer";

export type TApplicationState = Readonly<{
  characters: TCharacterState;
  comics: TComicState;
  creators: TCreatorState;
  events: TEventState;
  pagination: TPaginationState;
  search: TSearchState;
  series: TSeriesState;
  stories: TStoriesState;
}>;
