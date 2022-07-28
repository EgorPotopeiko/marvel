import {AxiosResponse} from "axios";
import { call, select, put } from 'redux-saga/effects';
import {statePage} from "../../store/pagination/selectors";
import Stories from "../../services/stories";
import {getAllStoriesErrorAction, getAllStoriesSuccessAction} from "../../store/stories/actions";

function* loadAllStories() {
    try {
        const getPage: number = yield select(statePage);
        const { data }: AxiosResponse = yield call(Stories.getAllStories, getPage - 1);
        const newData = data.data.results;
        yield put(getAllStoriesSuccessAction(newData));
    }
    catch (error) {yield put(getAllStoriesErrorAction(error))}
}

export default loadAllStories