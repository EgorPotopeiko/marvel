import React, {FC, useEffect} from 'react';
import CardPerson from "../../../components/cards/card_character/card";
import {Container, Grid, Pagination} from "@mui/material";
import {getAllCharactersStartAction} from "../../../store/characters/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectCharacters} from "../../../store/characters/selectors";
import {statePage, stateTotal} from "../../../store/pagination/selectors";
import {setPage} from "../../../store/pagination/actions";
import Loader from "../../../components/loader/loader";
import {TCharacter} from "../../../models/character";
import './page_characters.scss';
import '../../pages.scss';

const PageCharacters: FC = () => {
    const dispatch = useDispatch();
    const {characters, isLoading} = useSelector(selectCharacters);
    const total = useSelector(stateTotal);
    const getPage = useSelector(statePage);
    useEffect(() => {
        dispatch(getAllCharactersStartAction())
    }, [getPage])
    return (
        <div className="page page__characters">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {isLoading && (<Loader />)}
                    {!isLoading && (characters.map((character: TCharacter) => (
                        <Grid item xs={2} sm={2.6} md={4} key={character.id}>
                            <CardPerson data-testid="person_test-id" person={character} />
                        </Grid>
                    )))}
                </Grid>
                <Pagination page={getPage} count={Math.floor(total / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageCharacters;
