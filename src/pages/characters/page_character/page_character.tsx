import React, {FC} from 'react';
import {Container, Divider, List, ListItem, ListItemText, Skeleton, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectCharacters} from "../../../store/characters/selectors";
import Loader from "../../../components/loader/loader";
import {ComicSummary, EventSummary, SeriesSummary, StorySummary} from "../../../models/common";
import {Link} from "react-router-dom";
import {getComicStartAction} from "../../../store/comics/actions";
import {getSeriesStartAction} from "../../../store/series/actions";
import {getStoryStartAction} from "../../../store/stories/actions";
import {getEventStartAction} from "../../../store/events/actions";
import './page_character.scss';

const PageCharacter: FC = () => {
    const dispatch = useDispatch();
    const {character, isLoading} = useSelector(selectCharacters);
    const regId = /([0-9])\w+/gm;
    return (
        <div className="page__character">
            <Container maxWidth='lg'>
                <div className="character__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <>
                        <div className="character__card-header">
                            <div className="character__card-img">
                                <img alt='#' src={character!.thumbnail.path + `/standard_fantastic.jpg`}/>
                            </div>
                            <div className="character__card-info">
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div">{character!.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{character!.description}</Typography>
                            </div>
                        </div>
                        <div className="character__card-resources">
                            {character!.comics.items.length !== 0 && (
                            <div className="character__card-resource">
                                <Typography
                                    align='center'
                                    gutterBottom
                                    variant="h6"
                                    component="div">Comics</Typography>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                    {character!.comics.items.map((comic: ComicSummary) => {
                                        const id = comic.resourceURI.match(regId);
                                        return (
                                        <>
                                            <ListItem
                                            key={comic.name}
                                            disableGutters
                                            >
                                                <ListItemText
                                                    primary={comic.name}
                                                    secondary={<Link onClick={() => dispatch(getComicStartAction(id))} to={`/comics/${id}`}>{comic.resourceURI}</Link>}  />
                                            </ListItem>
                                            <Divider variant="inset" component="li" />
                                        </>
                                    )})}
                                </List>
                            </div>
                            )}
                            {character!.series.items.length !== 0 && (
                            <div className="character__card-resource">
                                <Typography
                                    align='center'
                                    gutterBottom
                                    variant="h6"
                                    component="div">Series</Typography>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                    {character!.series.items.map((series: SeriesSummary) => {
                                        const id = series.resourceURI.match(regId);
                                        return (
                                            <>
                                                <ListItem
                                                    key={series.name}
                                                    disableGutters
                                                >
                                                    <ListItemText
                                                        primary={series.name}
                                                        secondary={<Link onClick={() => dispatch(getSeriesStartAction(id))} to={`/series/${id}`}>{series.resourceURI}</Link>}
                                                    />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                    )})}
                                </List>
                            </div>
                            )}
                            {character!.stories.items.length !== 0 && (
                                <div className="character__card-resource">
                                    <Typography
                                        align='center'
                                        gutterBottom
                                        variant="h6"
                                        component="div">Stories</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {character!.stories.items.map((story: StorySummary) => {
                                            const id = story.resourceURI.match(regId);
                                            return (
                                                <>
                                                    <ListItem
                                                        key={story.name}
                                                        disableGutters
                                                    >
                                                        <ListItemText
                                                            primary={story.name}
                                                            secondary={<Link onClick={() => dispatch(getStoryStartAction(id))} to={`/stories/${id}`}>{story.resourceURI}</Link>}  />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                        )})}
                                    </List>
                                </div>
                            )}
                            {character!.events.items.length !== 0 && (
                                <div className="character__card-resource">
                                    <>
                                        <Typography
                                            align='center'
                                            gutterBottom
                                            variant="h6"
                                            component="div">Events</Typography>
                                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                            {character!.events.items.map((event: EventSummary) => {
                                                const id = event.resourceURI.match(regId);
                                                return (
                                                    <>
                                                        <ListItem
                                                            key={event.name}
                                                            disableGutters
                                                        >
                                                            <ListItemText
                                                                primary={event.name}
                                                                secondary={<Link onClick={() => dispatch(getEventStartAction(id))} to={`/events/${id}`}>{event.resourceURI}</Link>}  />
                                                        </ListItem>
                                                        <Divider variant="inset" component="li" />
                                                    </>
                                                )})}
                                        </List>
                                    </>
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

export default PageCharacter;
