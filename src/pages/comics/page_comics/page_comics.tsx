import React, { FC, useEffect } from "react";
import { Container, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { statePage, stateTotal } from "../../../store/pagination/selectors";
import { setPage } from "../../../store/pagination/actions";
import CardComics from "../../../components/cards/card_comics/card";
import { getAllComicsStartAction } from "../../../store/comics/actions";
import { selectComics } from "../../../store/comics/selectors";
import Loader from "../../../components/loader/loader";
import { TComic } from "../../../models/comic";
import "./page_comics.scss";
import "../../pages.scss";

const PageComics: FC = () => {
  const dispatch = useDispatch();
  const { comics, isLoading } = useSelector(selectComics);
  const total = useSelector(stateTotal);
  const getPage = useSelector(statePage);
  useEffect(() => {
    dispatch(getAllComicsStartAction());
  }, [getPage]);
  return (
    <div className="page page__comics">
      <Container maxWidth="lg">
        <div className="page__inner">
          {isLoading && <Loader />}
          {!isLoading &&
            comics.map((comic: TComic) => (
              <CardComics key={comic.id} comic={comic} />
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

export default PageComics;
