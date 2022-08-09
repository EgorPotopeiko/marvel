import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {getStoryStartAction} from "../../../store/stories/actions";

interface StoriesProps{
    story: any
}

const CardStories: FC<StoriesProps> = ({story}) => {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(getStoryStartAction(story.id))} className='card__story'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <Link to={`/stories/${story.id}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="170"
                            image={story.thumbnail !== null ? story.thumbnail.path + "/landscape_xlarge.jpg" : undefined}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {story.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {story.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    );
}

export default CardStories;
