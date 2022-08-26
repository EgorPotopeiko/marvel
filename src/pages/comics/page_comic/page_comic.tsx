import React, {FC} from 'react';
import {Container, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../../components/loader/loader";
import {selectComics} from "../../../store/comics/selectors";
import {CharacterSummary, ComicSummary, CreatorSummary, StorySummary} from "../../../models/common";
import {Link} from "react-router-dom";
import {getComicStartAction} from "../../../store/comics/actions";
import {getCreatorStartAction} from "../../../store/creators/actions";
import {getCharacterStartAction} from "../../../store/characters/actions";
import {getStoryStartAction} from "../../../store/stories/actions";
import './page_comic.scss';

const PageComic: FC = () => {
    const dispatch = useDispatch();
    const {comic, isLoading} = useSelector(selectComics);
    const regId = /([0-9])\w+/gm;
    return (
        <div className="page__comic">
            <Container maxWidth='lg'>
                <div className="comic__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <>
                            <div className="comic__card-header">
                                <div className="comic__card-img">
                                    <img alt='#' src={comic!.thumbnail.path + `/standard_fantastic.jpg`} />
                                </div>
                                <div className="comic__card-info">
                                    <Typography gutterBottom variant="h5" component="div">{comic!.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{comic!.description}</Typography>
                                </div>
                            </div>
                            <div className="comic__card-resources">
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Comics</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        <ListItem
                                            key={Math.random()}
                                            disableGutters
                                        >
                                            <ListItemText primary={comic!.series.name} />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                </div>
                                {comic!.variants.length !== 0 && (
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Variants</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {comic!.variants.map((variant: ComicSummary) => {
                                            const id = variant.resourceURI.match(regId);
                                            return (
                                                <>
                                                    <ListItem
                                                        key={variant.name}
                                                        disableGutters
                                                    >
                                                        <ListItemText primary={variant.name} secondary={<Link onClick={() => dispatch(getComicStartAction(id))} to={`/comics/${id}`}>{variant.resourceURI}</Link>}  />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                        )})}
                                    </List>
                                </div>
                                )}
                                {comic!.creators.items.length !== 0 && (
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Creators</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {comic!.creators.items.map((creator: CreatorSummary) => {
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
                                {comic!.characters.items.length !== 0 && (
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Characters</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {comic!.characters.items.map((character: CharacterSummary) => {
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
                                {comic!.stories.items.length !== 0 && (
                                <div className="comic__card-resource">
                                    <Typography align='center' gutterBottom variant="h6" component="div">Stories</Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                                        {comic!.stories.items.map((story: StorySummary) => {
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
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default PageComic;
