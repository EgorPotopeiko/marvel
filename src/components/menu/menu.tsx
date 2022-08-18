import React, {FC, useState} from 'react';
import {Collapse, Container, Divider, List, ListItemButton, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPage} from "../../store/pagination/actions";
import './menu.scss';

const menu_items = ['characters', 'comics', 'creators', 'events', 'series', 'stories'];

const Menu: FC = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className="menu">
            <Container maxWidth='lg'>
                {menu_items.map((elem) => (
                    <Link key={elem.toLowerCase()} className="menu__item" onClick={() => dispatch(setPage(1))} to={`/${elem}`}>{elem.toUpperCase()}</Link>
                ))}
                <div className="menu__adaptive">
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="MENU" />
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                {menu_items.map((elem) => (
                                    <Link key={elem.toLowerCase()} className="menu__item-adaptive" onClick={() => dispatch(setPage(1))} to={`/${elem}`}>{elem.toUpperCase()}</Link>
                                ))}
                            </ListItemButton>
                        </List>
                    </Collapse>
                </div>

            </Container>
        </div>
    );
}

export default Menu;
