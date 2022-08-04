import React, {FC} from 'react';
import './page_character.scss';
import {Container, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectCharacters} from "../../../store/characters/selectors";
import Loader from "../../../components/loader/loader";

const PageCharacter: FC = () => {
    const {character, isLoading} = useSelector(selectCharacters);
    return (
        <div className="page__character">
            <Container maxWidth='lg'>
                <div className="character__card">
                    {isLoading && (<Loader />)}
                    {!isLoading && (
                        <div className="character__card-header">
                            <div className="character__card-img">
                                <img alt='#' src={character[0].thumbnail.path + `/standard_fantastic.jpg`} />
                            </div>
                            <div className="character__card-info">
                                <Typography gutterBottom variant="h5" component="div">{character[0].name}</Typography>
                                <Typography variant="body2" color="text.secondary">{character[0].description}</Typography>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default PageCharacter;
