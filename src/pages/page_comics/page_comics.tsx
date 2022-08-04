import React, {FC, useEffect} from 'react';
import './page_comics.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage} from "../../store/pagination/selectors";
import {setPage} from "../../store/pagination/actions";
import CardComics from "../../components/cards/card_comics/card";
import {getAllComicsStartAction} from "../../store/comics/actions";
import {selectComics} from "../../store/comics/selectors";
import Loader from "../../components/loader/loader";

const PageComics: FC = () => {
    const dispatch = useDispatch();
    const {comics, isLoading} = useSelector(selectComics);
    const getPage = useSelector(statePage);
    useEffect(() => {
        dispatch(getAllComicsStartAction())
    }, [getPage])
    return (
        <div className="page__comics">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {isLoading && (<Loader />)}
                    {!isLoading && (comics.map((comics: any) => (
                        <Grid item xs={2} sm={4} md={4} key={comics.id}>
                            <CardComics comics={comics} />
                        </Grid>
                    )))}
                </Grid>
                <Pagination page={getPage} count={Math.floor(52644 / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageComics;
