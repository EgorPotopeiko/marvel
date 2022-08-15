import React, {FC} from 'react';
import './page_character.scss';
import {Container, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectCharacters} from "../../../store/characters/selectors";
import Loader from "../../../components/loader/loader";
import {ComicSummary, EventSummary, SeriesSummary, StorySummary} from "../../../models/common";

const PageCharacter: FC = () => {
    const {character, isLoading} = useSelector(selectCharacters);
    return (
        <div className="page__character">
            <Container maxWidth='lg'>
                <div className="character__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <>
                        <div className="character__card-header">
                            <div className="character__card-img">
                                <img alt='#' src={character!.thumbnail.path + `/standard_fantastic.jpg`} />
                            </div>
                            <div className="character__card-info">
                                <Typography gutterBottom variant="h5" component="div">{character!.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{character!.description}</Typography>
                            </div>
                        </div>
                        <div className="character__card-resources">
                            <div className="character__card-resource">
                                <Typography align='center' gutterBottom variant="h6" component="div">Comics</Typography>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                    {character!.comics.items.map((comic: ComicSummary) => (
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
                            <div className="character__card-resource">
                                <Typography align='center' gutterBottom variant="h6" component="div">Series</Typography>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                    {character!.series.items.map((series: SeriesSummary) => (
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
                            <div className="character__card-resource">
                                <Typography align='center' gutterBottom variant="h6" component="div">Stories</Typography>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                    {character!.stories.items.map((story: StorySummary) => (
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
                            <div className="character__card-resource">
                                <Typography align='center' gutterBottom variant="h6" component="div">Events</Typography>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                    {character!.events.items.map((event: EventSummary) => (
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

export default PageCharacter;
