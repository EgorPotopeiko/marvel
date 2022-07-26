import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface SeriesProps{
    series: any
}

const CardSeries: FC<SeriesProps> = ({series}) => {
    return (
        <div className='card__series'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170"
                        image={series.thumbnail.path + "/landscape_xlarge.jpg"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {series.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {series.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CardSeries;
