import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Button, Container, Input} from "@mui/material";
import {useDispatch} from "react-redux";
import {setSearch as startSearch} from "../../store/search/actions";
import {getAllCharactersStartAction} from "../../store/characters/actions";
import {getAllComicsStartAction} from "../../store/comics/actions";
import {getAllCreatorsStartAction} from "../../store/creators/actions";
import {getAllEventsStartAction} from "../../store/events/actions";
import {getAllSeriesStartAction} from "../../store/series/actions";
import {getAllStoriesStartAction} from "../../store/stories/actions";
import {setPage} from "../../store/pagination/actions";
import './header.scss';

const Header: FC = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    return (
        <div className="header">
            <Container maxWidth='lg'>
            <img height='50px' width='150px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png' alt='#' />
            <div className='header__actions'>
                <Input value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} placeholder='search' />
                <Button onClick={() => {
                    dispatch(startSearch(search.toLowerCase()))
                    switch (window.location.pathname) {
                        case '/characters': return (
                            dispatch(setPage(1)),
                            dispatch(getAllCharactersStartAction())
                        )
                        case '/comics': return (
                            dispatch(setPage(1)),
                            dispatch(getAllComicsStartAction())
                        )
                        case '/creators': return (
                            dispatch(setPage(1)),
                            dispatch(getAllCreatorsStartAction())
                        )
                        case '/events': return (
                            dispatch(setPage(1)),
                            dispatch(getAllEventsStartAction())
                        )
                        case '/series': return (
                            dispatch(setPage(1)),
                            dispatch(getAllSeriesStartAction())
                        )
                        case '/stories': return (
                            dispatch(setPage(1)),
                            dispatch(getAllStoriesStartAction())
                        )
                    }
                }} variant='contained'>search</Button>
            </div>
            </Container>
        </div>
    );
}

export default Header;
