import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface PersonProps{
    person: any
}

const CardPerson: FC<PersonProps> = ({person}) => {
    return (
        <div className='card__person'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170"
                        image={person.thumbnail.path + "/landscape_xlarge.jpg"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {person.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {person.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CardPerson;
