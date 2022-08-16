import React, {FC} from 'react';
import './menu.scss';
import {Container} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPage} from "../../store/pagination/actions";

const menu_items = ['characters', 'comics', 'creators', 'events', 'series', 'stories'];

const Menu: FC = () => {
    const dispatch = useDispatch();
    return (
        <div className="menu">
            <Container maxWidth='lg'>
                {menu_items.map((elem) => (
                    <a key={elem} href="" className="menu__item"><Link className="menu__item-link" onClick={() => dispatch(setPage(1))} to={`/${elem}`}>{elem.toUpperCase()}</Link></a>
                ))}
            </Container>
        </div>
    );
}

export default Menu;
