import React, {FC, useEffect} from 'react';
import './page_events.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage} from "../../../store/pagination/selectors";
import {setPage} from "../../../store/pagination/actions";
import {getAllEventsStartAction} from "../../../store/events/actions";
import CardEvents from "../../../components/cards/card_event/card";
import {selectEvents} from "../../../store/events/selectors";
import Loader from "../../../components/loader/loader";


const PageEvents: FC = () => {
    const dispatch = useDispatch();
    const {events, isLoading} = useSelector(selectEvents);
    const getPage = useSelector(statePage);
    useEffect(() => {
        dispatch(getAllEventsStartAction())
    }, [getPage])
    return (
        <div className="page__events">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {isLoading && (<Loader />)}
                    {!isLoading && (events.map((event: any) => (
                        <Grid item xs={2} sm={4} md={4} key={event.id}>
                            <CardEvents event={event} />
                        </Grid>
                    )))}
                </Grid>
                <Pagination page={getPage} count={Math.floor(74 / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageEvents;
