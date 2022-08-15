import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {getEventStartAction} from "../../../store/events/actions";
import {TEvent} from "../../../models/event";

interface EventsProps{
    event: TEvent
}

const CardEvents: FC<EventsProps> = ({event}) => {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(getEventStartAction(event.id))} className='card__events'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <Link to={`/events/${event.id}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="170"
                            image={event.thumbnail.path + "/landscape_xlarge.jpg"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {event.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {event.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    );
}

export default CardEvents;
