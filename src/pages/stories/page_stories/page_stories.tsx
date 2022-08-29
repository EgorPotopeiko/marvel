import React, { FC, useEffect } from "react";
import { Container, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { statePage, stateTotal } from "../../../store/pagination/selectors";
import { setPage } from "../../../store/pagination/actions";
import { getAllStoriesStartAction } from "../../../store/stories/actions";
import { selectStories } from "../../../store/stories/selectors";
import CardStories from "../../../components/cards/card_story/card";
import Loader from "../../../components/loader/loader";
import { TStory } from "../../../models/story";
import "./page_stories.scss";
import "../../pages.scss";

const PageStories: FC = () => {
  const dispatch = useDispatch();
  const { stories, isLoading } = useSelector(selectStories);
  const total = useSelector(stateTotal);
  const getPage = useSelector(statePage);
  useEffect(() => {
    dispatch(getAllStoriesStartAction());
  }, [getPage]);
  return (
    <div className="page page__stories">
      <Container maxWidth="lg">
        <div className="page__inner">
          {isLoading && <Loader />}
          {!isLoading &&
            stories.map((story: TStory) => (
              <CardStories key={story.id} story={story} />
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

export default PageStories;
