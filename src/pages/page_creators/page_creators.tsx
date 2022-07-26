import React, {FC, useEffect} from 'react';
import './page_creators.scss';
import {Container, Grid, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {statePage} from "../../store/pagination/selectors";
import {setPage} from "../../store/pagination/actions";
import Creators from "../../services/creators";
import {stateCreators} from "../../store/creators/selectors";
import {getAllCreatorsAction} from "../../store/creators/actions";
import CardCreators from "../../components/cards/card_creator/card";

const {getAllCreators} = Creators

const PageCreators: FC = () => {
    const dispatch = useDispatch();
    const creators = useSelector(stateCreators);
    const getPage = useSelector(statePage);
    useEffect(() => {
        getAllCreators(getPage - 1)
            .then((res) => res.data.data)
            .then((data) => dispatch(getAllCreatorsAction(data.results)))
    }, [getPage])
    return (
        <div className="page__creators">
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {creators.map((creator: any) => (
                        <Grid item xs={2} sm={4} md={4} key={creator.id}>
                            <CardCreators creators={creator} />
                        </Grid>
                    ))}
                </Grid>
                <Pagination count={Math.floor(5722 / 20) + 1} onChange={(_event: any, value: any) => dispatch(setPage(value))} />
            </Container>
        </div>
    );
}

export default PageCreators;
