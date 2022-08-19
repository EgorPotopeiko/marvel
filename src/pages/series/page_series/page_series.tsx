import React, {FC, useEffect} from 'react';
import './page_series.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage, stateTotal} from "../../../store/pagination/selectors";
import {setPage} from "../../../store/pagination/actions";
import {getAllSeriesStartAction} from "../../../store/series/actions";
import CardSeries from "../../../components/cards/card_series/card";
import {selectSeries} from "../../../store/series/selectors";
import Loader from "../../../components/loader/loader";
import {TSeries} from "../../../models/series";

const PageSeries: FC = () => {
    const dispatch = useDispatch();
    const {series, isLoading} = useSelector(selectSeries);
    const total = useSelector(stateTotal);
    const getPage = useSelector(statePage);
    useEffect(() => {
        dispatch(getAllSeriesStartAction())
    }, [getPage])
    return (
        <div className="page__series">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {isLoading && (<Loader />)}
                    {!isLoading && (series.map((series: TSeries) => (
                        <Grid item xs={2} sm={2.6} md={4} key={series.id}>
                            <CardSeries series={series} />
                        </Grid>
                    )))}
                </Grid>
                <Pagination page={getPage} count={Math.floor(total / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageSeries;
