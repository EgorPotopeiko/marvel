import React, {FC} from 'react';
import './page_story.scss';
import {Container, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import Loader from "../../../components/loader/loader";
import {selectStories} from "../../../store/stories/selectors";
import {CharacterSummary, ComicSummary, CreatorSummary, EventSummary, SeriesSummary} from "../../../models/common";

const PageStory: FC = () => {
    const {story, isLoading} = useSelector(selectStories);
    return (
        <div className="page__story">
            <Container maxWidth='lg'>
                <div className="story__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <>
                            <div className="story__card-header">
                                <div className="story__card-img">
                                    <img alt='#' src={story!.thumbnail ? story!.thumbnail.path + `/standard_fantastic.jpg` : undefined} />
                                </div>
                                <div className="story__card-info">
                                    <Typography gutterBottom variant="h5" component="div">{story!.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{story!.description}</Typography>
                                </div>
                            </div>
                            <div className="story__card-resources">
                                <div className="story__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Creators</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {story!.creators.items.map((creator: CreatorSummary) => (
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
                                <div className="story__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Characters</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {story!.characters.items.map((character: CharacterSummary) => (
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
                                <div className="story__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Series</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {story!.series.items.map((series: SeriesSummary) => (
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
                                <div className="story__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Comics</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {story!.comics.items.map((comic: ComicSummary) => (
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
                                <div className="story__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Events</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {story!.events.items.map((event: EventSummary) => (
                                            <>
                                                <ListItem
                                                    key={event.name}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={event.name} />
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

export default PageStory;
