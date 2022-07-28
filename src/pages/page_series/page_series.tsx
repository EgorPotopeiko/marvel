import React, {FC, useEffect} from 'react';
import './page_series.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage} from "../../store/pagination/selectors";
import {setPage} from "../../store/pagination/actions";
import {getAllSeriesStartAction} from "../../store/series/actions";
import CardSeries from "../../components/cards/card_series/card";
import {selectSeries} from "../../store/series/selectors";
import Loader from "../../components/loader/loader";


const PageSeries: FC = () => {
    const dispatch = useDispatch();
    const {series, isLoading} = useSelector(selectSeries);
    const getPage = useSelector(statePage);
    useEffect(() => {
        dispatch(getAllSeriesStartAction())
    }, [getPage])
    return (
        <div className="page__events">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {isLoading && (<Loader />)}
                    {!isLoading && (series.map((series: any) => (
                        <Grid item xs={2} sm={4} md={4} key={series.id}>
                            <CardSeries series={series} />
                        </Grid>
                    )))}
                </Grid>
                <Pagination count={Math.floor(13033 / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageSeries;
