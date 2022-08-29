import React, { FC, Fragment } from "react";
import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/loader/loader";
import { selectCreators } from "../../../store/creators/selectors";
import {
  ComicSummary,
  EventSummary,
  SeriesSummary,
  StorySummary,
} from "../../../models/common";
import { Link } from "react-router-dom";
import { getSeriesStartAction } from "../../../store/series/actions";
import { getStoryStartAction } from "../../../store/stories/actions";
import { getEventStartAction } from "../../../store/events/actions";
import { getComicStartAction } from "../../../store/comics/actions";
import "./page_creator.scss";

const PageCreator: FC = () => {
  const dispatch = useDispatch();
  const { creator, isLoading } = useSelector(selectCreators);
  const regId = /([0-9])\w+/gm;
  return (
    <div className="page__creator">
      <Container maxWidth="lg">
        <div className="creator__card">
          {isLoading && <Loader />}
          {!isLoading && (
            <>
              <div className="creator__card-header">
                <div className="creator__card-img">
                  <img
                    alt="#"
                    src={creator!.thumbnail.path + `/standard_fantastic.jpg`}
                  />
                </div>
                <div className="creator__card-info">
                  <Typography gutterBottom variant="h5" component="div">
                    {creator!.fullName}
                  </Typography>
                </div>
              </div>
              <div className="creator__card-resources">
                {creator!.comics.items.length !== 0 && (
                  <div className="creator__card-resource">
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Creators
                    </Typography>
                    <List
                      sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}
                    >
                      {creator!.comics.items.map((comic: ComicSummary) => {
                        const id = comic.resourceURI.match(regId);
                        return (
                          <Fragment key={comic.resourceURI}>
                            <ListItem disableGutters>
                              <ListItemText
                                primary={comic.name}
                                secondary={
                                  <Link
                                    onClick={() =>
                                      dispatch(getComicStartAction(id))
                                    }
                                    to={`/comics/${id}`}
                                  >
                                    {comic.resourceURI}
                                  </Link>
                                }
                              />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          </Fragment>
                        );
                      })}
                    </List>
                  </div>
                )}
                {creator!.series.items.length !== 0 && (
                  <div className="creator__card-resource">
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Series
                    </Typography>
                    <List
                      sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}
                    >
                      {creator!.series.items.map((series: SeriesSummary) => {
                        const id = series.resourceURI.match(regId);
                        return (
                          <Fragment key={series.resourceURI}>
                            <ListItem disableGutters>
                              <ListItemText
                                primary={series.name}
                                secondary={
                                  <Link
                                    onClick={() =>
                                      dispatch(getSeriesStartAction(id))
                                    }
                                    to={`/series/${id}`}
                                  >
                                    {series.resourceURI}
                                  </Link>
                                }
                              />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          </Fragment>
                        );
                      })}
                    </List>
                  </div>
                )}
                {creator!.stories.items.length !== 0 && (
                  <div className="creator__card-resource">
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Stories
                    </Typography>
                    <List
                      sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}
                    >
                      {creator!.stories.items.map((story: StorySummary) => {
                        const id = story.resourceURI.match(regId);
                        return (
                          <Fragment key={story.resourceURI}>
                            <ListItem disableGutters>
                              <ListItemText
                                primary={story.name}
                                secondary={
                                  <Link
                                    onClick={() =>
                                      dispatch(getStoryStartAction(id))
                                    }
                                    to={`/stories/${id}`}
                                  >
                                    {story.resourceURI}
                                  </Link>
                                }
                              />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          </Fragment>
                        );
                      })}
                    </List>
                  </div>
                )}
                {creator!.events.items.length !== 0 && (
                  <div className="creator__card-resource">
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Events
                    </Typography>
                    <List
                      sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}
                    >
                      {creator!.events.items.map((event: EventSummary) => {
                        const id = event.resourceURI.match(regId);
                        return (
                          <Fragment key={event.resourceURI}>
                            <ListItem disableGutters>
                              <ListItemText
                                primary={event.name}
                                secondary={
                                  <Link
                                    onClick={() =>
                                      dispatch(getEventStartAction(id))
                                    }
                                    to={`/events/${id}`}
                                  >
                                    {event.resourceURI}
                                  </Link>
                                }
                              />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          </Fragment>
                        );
                      })}
                    </List>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PageCreator;
