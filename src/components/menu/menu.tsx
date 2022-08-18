import React, {FC} from 'react';
import {Container} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPage} from "../../store/pagination/actions";
import './menu.scss';

const menu_items = ['characters', 'comics', 'creators', 'events', 'series', 'stories'];

const Menu: FC = () => {
    const dispatch = useDispatch();
    return (
        <div className="menu">
            <Container maxWidth='lg'>
                {menu_items.map((elem) => (
                    <Link key={elem.toLowerCase()} className="menu__item" onClick={() => dispatch(setPage(1))} to={`/${elem}`}>{elem.toUpperCase()}</Link>
                ))}
            </Container>
        </div>
    );
}

export default Menu;
