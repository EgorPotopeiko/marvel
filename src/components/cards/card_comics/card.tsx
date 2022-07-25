import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface ComicsProps{
    comics: any
}

const CardComics: FC<ComicsProps> = ({comics}) => {
    return (
        <div className='card__comics'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170"
                        image={comics.thumbnail.path + "/landscape_xlarge.jpg"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {comics.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {comics.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CardComics;
