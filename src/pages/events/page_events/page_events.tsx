import React, { FC, useEffect } from "react";
import { Container, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { statePage, stateTotal } from "../../../store/pagination/selectors";
import { setPage } from "../../../store/pagination/actions";
import { getAllEventsStartAction } from "../../../store/events/actions";
import CardEvents from "../../../components/cards/card_event/card";
import { selectEvents } from "../../../store/events/selectors";
import Loader from "../../../components/loader/loader";
import { TEvent } from "../../../models/event";
import "./page_events.scss";
import "../../pages.scss";

const PageEvents: FC = () => {
  const dispatch = useDispatch();
  const { events, isLoading } = useSelector(selectEvents);
  const total = useSelector(stateTotal);
  const getPage = useSelector(statePage);
  useEffect(() => {
    dispatch(getAllEventsStartAction());
  }, [getPage]);
  return (
    <div className="page page__events">
      <Container maxWidth="lg">
        <div className="page__inner">
          {isLoading && <Loader />}
          {!isLoading &&
            events.map((event: TEvent) => (
              <CardEvents key={event.id} event={event} />
            ))}
        </div>
        <Pagination
          page={getPage}
          count={Math.floor(total / 20) + 1}
          siblingCount={0}
          boundaryCount={3}
          onChange={(_event: any, value: number) => dispatch(setPage(value))}
        />
      </Container>
    </div>
  );
};

export default PageEvents;
