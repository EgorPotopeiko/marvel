import React, {FC, useEffect} from 'react';
import './page_events.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage} from "../../store/pagination/selectors";
import {setPage} from "../../store/pagination/actions";
import Events from "../../services/events";
import {getAllEventsAction} from "../../store/events/actions";
import CardEvents from "../../components/cards/card_event/card";
import {stateEvents} from "../../store/events/selectors";

const {getAllEvents} = Events

const PageEvents: FC = () => {
    const dispatch = useDispatch();
    const events = useSelector(stateEvents);
    const getPage = useSelector(statePage);
    useEffect(() => {
        getAllEvents(getPage - 1)
            .then((res) => res.data.data)
            .then((data) => dispatch(getAllEventsAction(data.results)))
    }, [getPage])
    return (
        <div className="page__events">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {events.map((event: any) => (
                        <Grid item xs={2} sm={4} md={4} key={event.id}>
                            <CardEvents events={event} />
                        </Grid>
                    ))}
                </Grid>
                <Pagination count={Math.floor(74 / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageEvents;
