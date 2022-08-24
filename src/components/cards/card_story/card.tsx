import React, {FC} from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {getStoryStartAction} from "../../../store/stories/actions";
import {TStory} from "../../../models/story";
import './card.scss';
import '../cards.scss';

interface StoriesProps{
    story: TStory
}

const CardStories: FC<StoriesProps> = ({story}) => {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(getStoryStartAction(story.id))} className='card card__story'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <Link to={`/stories/${story.id}`}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {story.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {story.description}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                {story.type}
                            </Typography>
                        </CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {story.id}
                        </Typography>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    );
}

export default CardStories;
