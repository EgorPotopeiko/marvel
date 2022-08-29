import React, { FC, useEffect } from "react";
import { Container, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { statePage, stateTotal } from "../../../store/pagination/selectors";
import { setPage } from "../../../store/pagination/actions";
import { getAllCreatorsStartAction } from "../../../store/creators/actions";
import CardCreators from "../../../components/cards/card_creator/card";
import { selectCreators } from "../../../store/creators/selectors";
import Loader from "../../../components/loader/loader";
import { TCreator } from "../../../models/creator";
import "./page_creators.scss";
import "../../pages.scss";

const PageCreators: FC = () => {
  const dispatch = useDispatch();
  const { creators, isLoading } = useSelector(selectCreators);
  const total = useSelector(stateTotal);
  const getPage = useSelector(statePage);
  useEffect(() => {
    dispatch(getAllCreatorsStartAction());
  }, [getPage]);
  return (
    <div className="page page__creators">
      <Container maxWidth="lg">
        <div className="page__inner">
          {isLoading && <Loader />}
          {!isLoading &&
            creators.map((creator: TCreator) => (
              <CardCreators key={creator.id} creator={creator} />
            ))}
        </div>
        <Pagination
          page={getPage}
          count={Math.floor(total / 20) + 1}
          siblingCount={0}
          boundaryCount={3}
          onChange={(_event: any, value: number) => dispatch(setPage(value))}
        />
      </Container>
    </div>
  );
};

export default PageCreators;
