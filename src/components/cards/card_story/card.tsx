import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface StoriesProps{
    story: any
}

const CardStories: FC<StoriesProps> = ({story}) => {
    return (
        <div className='card__stories'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
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
            </Card>
        </div>
    );
}

export default CardStories;
