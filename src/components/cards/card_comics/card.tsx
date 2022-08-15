import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {getCharacterStartAction} from "../../../store/characters/actions";
import {useDispatch} from "react-redux";
import {getComicStartAction} from "../../../store/comics/actions";
import {Link} from "react-router-dom";
import {TComic} from "../../../models/comic";

interface ComicsProps{
    comic: TComic
}

const CardComics: FC<ComicsProps> = ({comic}) => {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(getComicStartAction(comic.id))} className='card__comics'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <Link to={`/comics/${comic.id}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="170"
                            image={comic.thumbnail.path + "/landscape_xlarge.jpg"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {comic.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {comic.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    );
}

export default CardComics;
