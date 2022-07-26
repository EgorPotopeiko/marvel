import React, {FC, useEffect} from 'react';
import './page_series.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage} from "../../store/pagination/selectors";
import {setPage} from "../../store/pagination/actions";
import Series from "../../services/series";
import {getAllSeriesAction} from "../../store/series/actions";
import {stateSeries} from "../../store/series/selectors";
import CardSeries from "../../components/cards/card_series/card";

const {getAllSeries} = Series

const PageSeries: FC = () => {
    const dispatch = useDispatch();
    const series = useSelector(stateSeries);
    const getPage = useSelector(statePage);
    useEffect(() => {
        getAllSeries(getPage - 1)
            .then((res) => res.data.data)
            .then((data) => dispatch(getAllSeriesAction(data.results)))
    }, [getPage])
    return (
        <div className="page__events">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {series.map((series: any) => (
                        <Grid item xs={2} sm={4} md={4} key={series.id}>
                            <CardSeries series={series} />
                        </Grid>
                    ))}
                </Grid>
                <Pagination count={Math.floor(13033 / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageSeries;
