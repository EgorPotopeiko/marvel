import React, {FC} from 'react';
import './card.scss';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {getSeriesStartAction} from "../../../store/series/actions";
import {Link} from "react-router-dom";

interface SeriesProps{
    series: any
}

const CardSeries: FC<SeriesProps> = ({series}) => {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(getSeriesStartAction(series.id))} className='card__series'>
            <Card sx={{ maxWidth: 315, height: 340 }}>
                <Link to={`/series/${series.id}`}>
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
                </Link>
            </Card>
        </div>
    );
}

export default CardSeries;
