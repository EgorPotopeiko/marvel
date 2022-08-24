import React, {FC} from 'react';
import {Container, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import Loader from "../../../components/loader/loader";
import {selectEvents} from "../../../store/events/selectors";
import {CharacterSummary, ComicSummary, CreatorSummary, SeriesSummary, StorySummary} from "../../../models/common";
import './page_event.scss';

const PageEvent: FC = () => {
    const {event, isLoading} = useSelector(selectEvents);
    return (
        <div className="page__event">
            <Container maxWidth='lg'>
                <div className="event__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <>
                            <div className="event__card-header">
                                <div className="event__card-img">
                                    <img alt='#' src={event!.thumbnail.path + `/standard_fantastic.jpg`} />
                                </div>
                                <div className="event__card-info">
                                    <Typography gutterBottom variant="h5" component="div">{event!.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{event!.description}</Typography>
                                </div>
                            </div>
                            <div className="event__card-resources">
                                <div className="event__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Creators</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {event!.creators.items.map((creator: CreatorSummary) => (
                                            <>
                                                <ListItem
                                                    key={creator.name}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={creator.name} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className="event__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Characters</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {event!.characters.items.map((character: CharacterSummary) => (
                                            <>
                                                <ListItem
                                                    key={character.name}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={character.name} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className="event__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Stories</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {event!.stories.items.map((story: StorySummary) => (
                                            <>
                                                <ListItem
                                                    key={story.name}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={story.name} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className="event__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Comics</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {event!.comics.items.map((comic: ComicSummary) => (
                                            <>
                                                <ListItem
                                                    key={comic.name}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={comic.name} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className="event__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Series</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {event!.series.items.map((series: SeriesSummary) => (
                                            <>
                                                <ListItem
                                                    key={series.name}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={series.name} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        ))}
                                    </List>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default PageEvent;
