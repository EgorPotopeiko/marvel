import React, {FC} from 'react';
import './page_series-one.scss';
import {Container, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import Loader from "../../../components/loader/loader";
import {selectSeries} from "../../../store/series/selectors";
import {CharacterSummary, ComicSummary, CreatorSummary, EventSummary, StorySummary} from "../../../models/common";

const PageSeriesOne: FC = () => {
    const {select_series, isLoading} = useSelector(selectSeries);
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
                                <div className="singleSeries__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Creators</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.creators.items.map((creator: CreatorSummary) => (
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
                                <div className="singleSeries__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Characters</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.characters.items.map((character: CharacterSummary) => (
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
                                <div className="singleSeries__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Stories</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.stories.items.map((story: StorySummary) => (
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
                                <div className="singleSeries__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Comics</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.comics.items.map((comic: ComicSummary) => (
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
                                <div className="series-one__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Events</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {select_series!.events.items.map((event: EventSummary) => (
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

export default PageSeriesOne;
