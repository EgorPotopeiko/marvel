import React, {FC} from 'react';
import './page_creator.scss';
import {Container, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import Loader from "../../../components/loader/loader";
import {selectCreators} from "../../../store/creators/selectors";
import {ComicSummary, EventSummary, SeriesSummary, StorySummary} from "../../../models/common";

const PageCreator: FC = () => {
    const {creator, isLoading} = useSelector(selectCreators);
    return (
        <div className="page__creator">
            <Container maxWidth='lg'>
                <div className="creator__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <>
                            <div className="creator__card-header">
                                <div className="creator__card-img">
                                    <img alt='#' src={creator!.thumbnail.path + `/standard_fantastic.jpg`} />
                                </div>
                                <div className="creator__card-info">
                                    <Typography gutterBottom variant="h5" component="div">{creator!.fullName}</Typography>
                                </div>
                            </div>
                            <div className="creator__card-resources">
                                <div className="creator__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Creators</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {creator!.comics.items.map((comic: ComicSummary) => (
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
                                <div className="creator__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Series</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {creator!.series.items.map((series: SeriesSummary) => (
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
                                <div className="creator__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Stories</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {creator!.stories.items.map((story: StorySummary) => (
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
                                <div className="creator__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Events</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {creator!.events.items.map((event: EventSummary) => (
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

export default PageCreator;
