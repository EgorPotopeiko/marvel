import React, {FC, useEffect} from 'react';
import './page_creators.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage, stateTotal} from "../../../store/pagination/selectors";
import {setPage} from "../../../store/pagination/actions";
import {getAllCreatorsStartAction} from "../../../store/creators/actions";
import CardCreators from "../../../components/cards/card_creator/card";
import {selectCreators} from "../../../store/creators/selectors";
import Loader from "../../../components/loader/loader";

const PageCreators: FC = () => {
    const dispatch = useDispatch();
    const {creators, isLoading} = useSelector(selectCreators);
    const total = useSelector(stateTotal);
    const getPage = useSelector(statePage);
    useEffect(() => {
        dispatch(getAllCreatorsStartAction())
    }, [getPage])
    return (
        <div className="page__creators">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {isLoading && (<Loader />)}
                    {!isLoading && (creators.map((creator: any) => (
                        <Grid item xs={2} sm={4} md={4} key={creator.id}>
                            <CardCreators creator={creator} />
                        </Grid>
                    )))}
                </Grid>
                <Pagination page={getPage} count={Math.floor(total / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageCreators;
