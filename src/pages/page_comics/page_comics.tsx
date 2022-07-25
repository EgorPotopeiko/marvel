import React, {FC, useEffect} from 'react';
import './page_comics.scss';
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import {Container, Grid, Pagination} from "@mui/material";
import Comics from "../../services/comics";
import {useDispatch, useSelector} from "react-redux";
import {statePage} from "../../store/pagination/selectors";
import {setPage} from "../../store/pagination/actions";
import CardComics from "../../components/cards/card_comics/card";
import {getAllComicsAction} from "../../store/comics/actions";
import {stateComics} from "../../store/comics/selectors";

const {getAllComics} = Comics

const PageComics: FC = () => {
    const dispatch = useDispatch();
    const comics = useSelector(stateComics);
    const getPage = useSelector(statePage);
    useEffect(() => {
        getAllComics(getPage - 1)
            .then((res) => res.data.data)
            .then((data) => dispatch(getAllComicsAction(data.results)))
    }, [getPage])
    return (
        <div className="page__characters">
            <Header />
            <Menu />
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {comics.map((comics: any) => (
                        <Grid item xs={2} sm={4} md={4} key={comics.id}>
                            <CardComics comics={comics} />
                        </Grid>
                    ))}
                </Grid>
                <Pagination count={Math.floor(52644 / 20)} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageComics;
