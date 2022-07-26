import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface ComicsProps{
    creators: any
}

const CardCreators: FC<ComicsProps> = ({creators}) => {
    return (
        <div className='card__creators'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170"
                        image={creators.thumbnail.path + "/landscape_xlarge.jpg"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {creators.fullName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {creators.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CardCreators;
