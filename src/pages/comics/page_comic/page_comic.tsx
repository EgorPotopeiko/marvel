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
                            <div className="comic__card-resources">
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Comics</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                                <ListItem
                                                    key={comic.series}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={comic.series.name} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                    </List>
                                </div>
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Variants</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {comic.variants.map((variant: any) => (
                                            <>
                                                <ListItem
                                                    key={variant}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={variant.name} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Creators</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {comic.creators.items.map((creator: any) => (
                                            <>
                                                <ListItem
                                                    key={creator}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={creator.name} secondary={creator.role} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Characters</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {comic.characters.items.map((character: any) => (
                                            <>
                                                <ListItem
                                                    key={character}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={character.name} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        ))}
                                    </List>
                                </div>
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Stories</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {comic.stories.items.map((story: any) => (
                                            <>
                                                <ListItem
                                                    key={story}
                                                    disableGutters
                                                >
                                                    <ListItemText primary={story.name} />
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

export default PageComic;
