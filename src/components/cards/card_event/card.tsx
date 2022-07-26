import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface EventsProps{
    events: any
}

const CardEvents: FC<EventsProps> = ({events}) => {
    return (
        <div className='card__events'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170"
                        image={events.thumbnail.path + "/landscape_xlarge.jpg"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {events.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {events.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CardEvents;
