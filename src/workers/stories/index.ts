import { takeLatest } from "redux-saga/effects";
import { StoriesActionTypes } from "../../store/stories/action-types";
import loadAllStories from "./load_all_stories";
import loadStory from "./load_story";

export function* storiesSaga() {
  yield takeLatest(StoriesActionTypes.GET_ALL_STORIES_START, loadAllStories);
  yield takeLatest(StoriesActionTypes.GET_STORY_START, loadStory);
}
