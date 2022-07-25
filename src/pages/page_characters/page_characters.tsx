import React, {FC, useEffect, useState} from 'react';
import './page_characters.scss';
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import CardPerson from "../../components/cards/card_person/card";
import {Container, Grid, Pagination} from "@mui/material";
import Characters from "../../services/characters";
import {getAllCharactersAction} from "../../store/characters/actions";
import {useDispatch, useSelector} from "react-redux";
import {stateCharacters} from "../../store/characters/selectors";
import {statePage} from "../../store/pagination/selectors";
import {setPage} from "../../store/pagination/actions";

const {getAllCharacters} = Characters

const PageCharacters: FC = () => {
    const dispatch = useDispatch();
    const characters = useSelector(stateCharacters);
    const getPage = useSelector(statePage);
    useEffect(() => {
        getAllCharacters(getPage - 1)
            .then((res) => res.data.data)
            .then((data) => dispatch(getAllCharactersAction(data.results)))
    }, [getPage])
    return (
        <div className="page__characters">
            <Header />
            <Menu />
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {characters.map((character: any) => (
                        <Grid item xs={2} sm={4} md={4} key={character.id}>
                            <CardPerson person={character} />
                        </Grid>
                    ))}
                </Grid>
                <Pagination count={Math.floor(1562 / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageCharacters;
