import React, {FC} from 'react';
import './header.scss';
import {Button, Container, Input} from "@mui/material";

const Header: FC = () => {
    return (
        <div className="header">
            <Container maxWidth='lg'>
            <img height='50px' width='150px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png' alt='#' />
            <div className='header__actions'>
                <Input placeholder='search' />
                <Button variant='contained'>search</Button>
            </div>
            </Container>
        </div>
    );
}

export default Header;
