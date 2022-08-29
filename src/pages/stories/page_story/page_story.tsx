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
import { selectStories } from "../../../store/stories/selectors";
import {
  CharacterSummary,
  ComicSummary,
  CreatorSummary,
  EventSummary,
  SeriesSummary,
} from "../../../models/common";
import { Link } from "react-router-dom";
import { getCreatorStartAction } from "../../../store/creators/actions";
import { getCharacterStartAction } from "../../../store/characters/actions";
import { getSeriesStartAction } from "../../../store/series/actions";
import { getComicStartAction } from "../../../store/comics/actions";
import { getEventStartAction } from "../../../store/events/actions";
import "./page_story.scss";

const PageStory: FC = () => {
  const dispatch = useDispatch();
  const { story, isLoading } = useSelector(selectStories);
  const regId = /([0-9])\w+/gm;
  return (
    <div className="page__story">
      <Container maxWidth="lg">
        <div className="story__card">
          {isLoading && <Loader />}
          {!isLoading && (
            <>
              <div className="story__card-header">
                <div className="story__card-info">
                  <Typography gutterBottom variant="h5" component="div">
                    {story!.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {story!.description}
                  </Typography>
                </div>
              </div>
              <div className="story__card-resources">
                {story!.creators.items.length !== 0 && (
                  <div className="story__card-resource">
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
                      {story!.creators.items.map((creator: CreatorSummary) => {
                        const id = creator.resourceURI.match(regId);
                        return (
                          <Fragment key={creator.resourceURI}>
                            <ListItem disableGutters>
                              <ListItemText
                                primary={creator.name}
                                secondary={
                                  <Link
                                    onClick={() =>
                                      dispatch(getCreatorStartAction(id))
                                    }
                                    to={`/creators/${id}`}
                                  >
                                    {creator.resourceURI}
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
                {story!.characters.items.length !== 0 && (
                  <div className="story__card-resource">
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Characters
                    </Typography>
                    <List
                      sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}
                    >
                      {story!.characters.items.map(
                        (character: CharacterSummary) => {
                          const id = character.resourceURI.match(regId);
                          return (
                            <Fragment key={character.resourceURI}>
                              <ListItem disableGutters>
                                <ListItemText
                                  primary={character.name}
                                  secondary={
                                    <Link
                                      onClick={() =>
                                        dispatch(getCharacterStartAction(id))
                                      }
                                      to={`/characters/${id}`}
                                    >
                                      {character.resourceURI}
                                    </Link>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                            </Fragment>
                          );
                        }
                      )}
                    </List>
                  </div>
                )}
                {story!.series.items.length !== 0 && (
                  <div className="story__card-resource">
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
                      {story!.series.items.map((series: SeriesSummary) => {
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
                {story!.comics.items.length !== 0 && (
                  <div className="story__card-resource">
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Comics
                    </Typography>
                    <List
                      sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}
                    >
                      {story!.comics.items.map((comic: ComicSummary) => {
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
                {story!.events.items.length !== 0 && (
                  <div className="story__card-resource">
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
                      {story!.events.items.map((event: EventSummary) => {
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

export default PageStory;
