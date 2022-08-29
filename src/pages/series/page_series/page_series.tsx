import React, { FC, useEffect } from "react";
import { Container, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { statePage, stateTotal } from "../../../store/pagination/selectors";
import { setPage } from "../../../store/pagination/actions";
import { getAllSeriesStartAction } from "../../../store/series/actions";
import CardSeries from "../../../components/cards/card_series/card";
import { selectSeries } from "../../../store/series/selectors";
import Loader from "../../../components/loader/loader";
import { TSeries } from "../../../models/series";
import "./page_series.scss";
import "../../pages.scss";

const PageSeries: FC = () => {
  const dispatch = useDispatch();
  const { series, isLoading } = useSelector(selectSeries);
  const total = useSelector(stateTotal);
  const getPage = useSelector(statePage);
  useEffect(() => {
    dispatch(getAllSeriesStartAction());
  }, [getPage]);
  return (
    <div className="page__series">
      <Container maxWidth="lg">
        <div className="page__inner">
          {isLoading && <Loader />}
          {!isLoading &&
            series.map((series: TSeries) => (
              <CardSeries key={series.id} series={series} />
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

export default PageSeries;
