import React, {FC, useEffect} from 'react';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage, stateTotal} from "../../../store/pagination/selectors";
import {setPage} from "../../../store/pagination/actions";
import {getAllStoriesStartAction} from "../../../store/stories/actions";
import {selectStories} from "../../../store/stories/selectors";
import CardStories from "../../../components/cards/card_story/card";
import Loader from "../../../components/loader/loader";
import {TStory} from "../../../models/story";
import './page_stories.scss';
import '../../pages.scss';

const PageStories: FC = () => {
    const dispatch = useDispatch();
    const {stories, isLoading} = useSelector(selectStories);
    const total = useSelector(stateTotal);
    const getPage = useSelector(statePage);
    useEffect(() => {
        dispatch(getAllStoriesStartAction())
    }, [getPage])
    return (
        <div className="page page__stories">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {isLoading && (<Loader />)}
                    {!isLoading && (stories.map((story: TStory) => (
                        <Grid item xs={2} sm={2.6} md={4} key={story.id}>
                            <CardStories story={story} />
                        </Grid>
                    )))}
                </Grid>
                <Pagination page={getPage} count={Math.floor(total / 20) + 1} onChange={(_event: any, value: number) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageStories;
