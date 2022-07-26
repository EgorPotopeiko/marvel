import React, {FC, useEffect} from 'react';
import './page_stories.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage} from "../../store/pagination/selectors";
import {setPage} from "../../store/pagination/actions";
import Stories from "../../services/stories";
import {getAllStoriesAction} from "../../store/stories/actions";
import {stateStories} from "../../store/stories/selectors";
import CardStories from "../../components/cards/card_story/card";

const {getAllStories} = Stories

const PageStories: FC = () => {
    const dispatch = useDispatch();
    const stories = useSelector(stateStories);
    const getPage = useSelector(statePage);
    useEffect(() => {
        getAllStories(getPage - 1)
            .then((res) => res.data.data)
            .then((data) => dispatch(getAllStoriesAction(data.results)))
    }, [getPage])
    return (
        <div className="page__events">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {stories.map((story: any) => (
                        <Grid item xs={2} sm={4} md={4} key={story.id}>
                            <CardStories story={story} />
                        </Grid>
                    ))}
                </Grid>
                <Pagination count={Math.floor(121804 / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageStories;
