import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCreatorStartAction } from "../../../store/creators/actions";
import { TCreator } from "../../../models/creator";
import "./card.scss";
import "../cards.scss";

interface CreatorProps {
  creator: TCreator;
}

const CardCreators: FC<CreatorProps> = ({ creator }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(getCreatorStartAction(creator.id))}
      className="card card__creators"
    >
      <Card sx={{ maxWidth: 315, height: 340 }}>
        <Link to={`/creators/${creator.id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image={`${
                creator.thumbnail.path +
                `/landscape_xlarge.${creator.thumbnail.extension}`
              }`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {creator.fullName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
};

export default CardCreators;
