import React, {FC} from 'react';
import './page_comic.scss';
import {Container, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import Loader from "../../../components/loader/loader";
import {selectComics} from "../../../store/comics/selectors";

const PageComic: FC = () => {
    const {comic, isLoading} = useSelector(selectComics);
    return (
        <div className="page__comic">
            <Container maxWidth='lg'>
                <div className="comic__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <>
                            <div className="comic__card-header">
                                <div className="comic__card-img">
                                    <img alt='#' src={comic.thumbnail.path + `/standard_fantastic.jpg`} />
                                </div>
                                <div className="comic__card-info">
                                    <Typography gutterBottom variant="h5" component="div">{comic.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{comic.description}</Typography>
                                </div>
                            </div>
                            {/*<div className="comic__card-resources">*/}
                            {/*    <div className="comic__card-resource">*/}
                            {/*        <Typography align='center' gutterBottom variant="h6" component="div">Comics</Typography>*/}
                            {/*        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}>*/}
                            {/*            {comic.ser.items.map((comics: any) => (*/}
                            {/*                <>*/}
                            {/*                    <ListItem*/}
                            {/*                        key={comics}*/}
                            {/*                        disableGutters*/}
                            {/*                    >*/}
                            {/*                        <ListItemText primary={comics.name} />*/}
                            {/*                    </ListItem>*/}
                            {/*                    <Divider variant="inset" component="li" />*/}
                            {/*                </>*/}
                            {/*            ))}*/}
                            {/*        </List>*/}
                            {/*    </div>*/}
                            {/*    <div className="comic__card-resource">*/}
                            {/*        <Typography align='center' gutterBottom variant="h6" component="div">Series</Typography>*/}
                            {/*        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}>*/}
                            {/*            {character.series.items.map((series: any) => (*/}
                            {/*                <>*/}
                            {/*                    <ListItem*/}
                            {/*                        key={series}*/}
                            {/*                        disableGutters*/}
                            {/*                    >*/}
                            {/*                        <ListItemText primary={series.name} />*/}
                            {/*                    </ListItem>*/}
                            {/*                    <Divider variant="inset" component="li" />*/}
                            {/*                </>*/}
                            {/*            ))}*/}
                            {/*        </List>*/}
                            {/*    </div>*/}
                            {/*    <div className="comic__card-resource">*/}
                            {/*        <Typography align='center' gutterBottom variant="h6" component="div">Stories</Typography>*/}
                            {/*        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}>*/}
                            {/*            {character.stories.items.map((stories: any) => (*/}
                            {/*                <>*/}
                            {/*                    <ListItem*/}
                            {/*                        key={stories}*/}
                            {/*                        disableGutters*/}
                            {/*                    >*/}
                            {/*                        <ListItemText primary={stories.name} />*/}
                            {/*                    </ListItem>*/}
                            {/*                    <Divider variant="inset" component="li" />*/}
                            {/*                </>*/}
                            {/*            ))}*/}
                            {/*        </List>*/}
                            {/*    </div>*/}
                            {/*    <div className="comic__card-resource">*/}
                            {/*        <Typography align='center' gutterBottom variant="h6" component="div">Events</Typography>*/}
                            {/*        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}>*/}
                            {/*            {character.events.items.map((events: any) => (*/}
                            {/*                <>*/}
                            {/*                    <ListItem*/}
                            {/*                        key={events}*/}
                            {/*                        disableGutters*/}
                            {/*                    >*/}
                            {/*                        <ListItemText primary={events.name} />*/}
                            {/*                    </ListItem>*/}
                            {/*                    <Divider variant="inset" component="li" />*/}
                            {/*                </>*/}
                            {/*            ))}*/}
                            {/*        </List>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default PageComic;
