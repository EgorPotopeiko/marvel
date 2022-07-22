import React, {FC} from 'react';
import './menu.scss';
import {Container} from "@mui/material";

const Menu: FC = () => {
    return (
        <div className="menu">
            <Container maxWidth='lg'>
                <a href="" className="menu__item">characters</a>
                <a href="" className="menu__item">comics</a>
                <a href="" className="menu__item">creators</a>
                <a href="" className="menu__item">events</a>
                <a href="" className="menu__item">series</a>
                <a href="" className="menu__item">stories</a>
            </Container>
        </div>
    );
}

export default Menu;
