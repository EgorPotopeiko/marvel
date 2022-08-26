import React, { FC } from "react";
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
import { selectEvents } from "../../../store/events/selectors";
import {
  CharacterSummary,
  ComicSummary,
  CreatorSummary,
  SeriesSummary,
  StorySummary,
} from "../../../models/common";
import { Link } from "react-router-dom";
import { getCreatorStartAction } from "../../../store/creators/actions";
import { getCharacterStartAction } from "../../../store/characters/actions";
import { getStoryStartAction } from "../../../store/stories/actions";
import { getComicStartAction } from "../../../store/comics/actions";
import { getSeriesStartAction } from "../../../store/series/actions";
import "./page_event.scss";

const PageEvent: FC = () => {
  const dispatch = useDispatch();
  const { event, isLoading } = useSelector(selectEvents);
  const regId = /([0-9])\w+/gm;
  return (
    <div className="page__event">
      <Container maxWidth="lg">
        <div className="event__card">
          {isLoading && <Loader />}
          {!isLoading && (
            <>
              <div className="event__card-header">
                <div className="event__card-img">
                  <img
                    alt="#"
                    src={event!.thumbnail.path + `/standard_fantastic.jpg`}
                  />
                </div>
                <div className="event__card-info">
                  <Typography gutterBottom variant="h5" component="div">
                    {event!.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event!.description}
                  </Typography>
                </div>
              </div>
              <div className="event__card-resources">
                {event!.creators.items.length !== 0 && (
                  <div className="event__card-resource">
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
                      {event!.creators.items.map((creator: CreatorSummary) => {
                        const id = creator.resourceURI.match(regId);
                        return (
                          <>
                            <ListItem key={creator.name} disableGutters>
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
                          </>
                        );
                      })}
                    </List>
                  </div>
                )}
                {event!.characters.items.length !== 0 && (
                  <div className="event__card-resource">
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
                      {event!.characters.items.map(
                        (character: CharacterSummary) => {
                          const id = character.resourceURI.match(regId);
                          return (
                            <>
                              <ListItem key={character.name} disableGutters>
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
                            </>
                          );
                        }
                      )}
                    </List>
                  </div>
                )}
                {event!.stories.items.length !== 0 && (
                  <div className="event__card-resource">
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
                      {event!.stories.items.map((story: StorySummary) => {
                        const id = story.resourceURI.match(regId);
                        return (
                          <>
                            <ListItem key={story.name} disableGutters>
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
                          </>
                        );
                      })}
                    </List>
                  </div>
                )}
                {event!.comics.items.length !== 0 && (
                  <div className="event__card-resource">
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
                      {event!.comics.items.map((comic: ComicSummary) => {
                        const id = comic.resourceURI.match(regId);
                        return (
                          <>
                            <ListItem key={comic.name} disableGutters>
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
                          </>
                        );
                      })}
                    </List>
                  </div>
                )}
                {event!.series.items.length !== 0 && (
                  <div className="event__card-resource">
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
                      {event!.series.items.map((series: SeriesSummary) => {
                        const id = series.resourceURI.match(regId);
                        return (
                          <>
                            <ListItem key={series.name} disableGutters>
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
                          </>
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

export default PageEvent;
