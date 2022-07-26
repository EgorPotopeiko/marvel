import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getCharacterStartAction } from "../../../store/characters/actions";
import { Link } from "react-router-dom";
import { TCharacter } from "../../../models/character";
import "./card.scss";
import "../cards.scss";

interface CharacterProps {
  person: TCharacter;
}

const CardCharacter: FC<CharacterProps> = ({ person }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(getCharacterStartAction(person.id))}
      className="card card__person"
    >
      <Card sx={{ maxWidth: 315, height: 340 }}>
        <Link to={`/characters/${person.id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image={`${
                person.thumbnail.path +
                `/landscape_xlarge.${person.thumbnail.extension}`
              }`}
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
        </Link>
      </Card>
    </div>
  );
};

export default CardCharacter;
