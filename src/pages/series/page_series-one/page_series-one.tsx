import React, {FC} from 'react';
import {Container, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../../components/loader/loader";
import {selectSeries} from "../../../store/series/selectors";
import {CharacterSummary, ComicSummary, CreatorSummary, EventSummary, StorySummary} from "../../../models/common";
import {Link} from "react-router-dom";
import {getCreatorStartAction} from "../../../store/creators/actions";
import {getCharacterStartAction} from "../../../store/characters/actions";
import {getStoryStartAction} from "../../../store/stories/actions";
import {getComicStartAction} from "../../../store/comics/actions";
import {getEventStartAction} from "../../../store/events/actions";
import './page_series-one.scss';

const PageSeriesOne: FC = () => {
    const dispatch = useDispatch();
    const {select_series, isLoading} = useSelector(selectSeries);
    const regId = /([0-9])\w+/gm;
    return (
        <div className="page__singleSeries">
            <Container maxWidth='lg'>
                <div className="singleSeries__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <>
                            <div className="singleSeries__card-header">
                                <div className="singleSeries__card-img">
                                    <img alt='#' src={select_series!.thumbnail.path + `/standard_fantastic.jpg`} />
                                </div>
                                <div className="singleSeries__card-info">
                                    <Typography gutterBottom variant="h5" component="div">{select_series!.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{select_series!.description}</Typography>
                                </div>
                            </div>
                            <div className="singleSeries__card-resources">
                                {select_series!.creators.items.length !== 0 && (
                                <div className="singleSeries__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Creators</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.creators.items.map((creator: CreatorSummary) => {
                                            const id = creator.resourceURI.match(regId);
                                            return (
                                                <>
                                                    <ListItem
                                                        key={creator.name}
                                                        disableGutters
                                                    >
                                                        <ListItemText primary={creator.name} secondary={<Link onClick={() => dispatch(getCreatorStartAction(id))} to={`/creators/${id}`}>{creator.resourceURI}</Link>}  />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                        )})}
                                    </List>
                                </div>
                                )}
                                {select_series!.characters.items.length !== 0 && (
                                <div className="singleSeries__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Characters</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.characters.items.map((character: CharacterSummary) => {
                                            const id = character.resourceURI.match(regId);
                                            return (
                                                <>
                                                    <ListItem
                                                        key={character.name}
                                                        disableGutters
                                                    >
                                                        <ListItemText primary={character.name} secondary={<Link onClick={() => dispatch(getCharacterStartAction(id))} to={`/characters/${id}`}>{character.resourceURI}</Link>}  />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                        )})}
                                    </List>
                                </div>
                                )}
                                {select_series!.stories.items.length !== 0 && (
                                <div className="singleSeries__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Stories</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.stories.items.map((story: StorySummary) => {
                                            const id = story.resourceURI.match(regId);
                                            return (
                                                <>
                                                    <ListItem
                                                        key={story.name}
                                                        disableGutters
                                                    >
                                                        <ListItemText primary={story.name} secondary={<Link onClick={() => dispatch(getStoryStartAction(id))} to={`/stories/${id}`}>{story.resourceURI}</Link>}  />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                            )})}
                                    </List>
                                </div>
                                )}
                                {select_series!.comics.items.length !== 0 && (
                                <div className="singleSeries__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Comics</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.comics.items.map((comic: ComicSummary) => {
                                            const id = comic.resourceURI.match(regId);
                                            return (
                                                <>
                                                    <ListItem
                                                        key={comic.name}
                                                        disableGutters
                                                    >
                                                        <ListItemText primary={comic.name} secondary={<Link onClick={() => dispatch(getComicStartAction(id))} to={`/comics/${id}`}>{comic.resourceURI}</Link>}  />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                        )})}
                                    </List>
                                </div>
                                )}
                                {select_series!.events.items.length !== 0 && (
                                <div className="series-one__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Events</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.events.items.map((event: EventSummary) => {
                                            const id = event.resourceURI.match(regId);
                                            return (
                                                <>
                                                    <ListItem
                                                        key={event.name}
                                                        disableGutters
                                                    >
                                                        <ListItemText primary={event.name} secondary={<Link onClick={() => dispatch(getEventStartAction(id))} to={`/events/${id}`}>{event.resourceURI}</Link>}  />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                            )})}
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
}

export default PageSeriesOne;
